function createMap(bridgeInfo) {
  // Create the tile layers for the background map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      '<a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; ' +
      '<a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object to hold the streetmap and topographic layers.
  let baseMaps = {
    "Street Map": streetmap,
    "Topographic Map": topo
  };

  // Create the map object with options.
  let myMap = L.map("map", {
    center: [38.999972, -120.939933],
    zoom: 12,
    layers: [streetmap, bridgeInfo] // Display streetmap and bridgeInfo layers initially.
  });

  // Create a layer control and add it to the map.
  L.control.layers(baseMaps, { "Bridges": bridgeInfo }, {
    collapsed: false
  }).addTo(myMap);
}

function getColor(condition) {
  // Define colors for different bridge conditions.
  switch (condition) {
    case "G":
      return "green";
    case "F":
      return "orange";
    case "P":
      return "red";
    default:
      return "gray"; // Default color for unknown conditions.
  }
}

function createMarkers(response) {
  // Check if response contains valid data.
  if (!response || !response.features || response.features.length === 0) {
    console.error("Invalid or empty GeoJSON data.");
    return;
  }

  // Extract bridge features from response.
  let bridges = response.features;

  // Initialize the marker cluster group.
  let markers = L.markerClusterGroup();

  // Loop through the bridges array.
  bridges.forEach(bridge => {
    // Determine color based on bridge condition.
    let color = getColor(bridge.properties.BRIDGE_CONDITION);
    
    // Changing Bridge Condition from G,F,P to Actual meaning
    let actualCondition;
    if (bridge.properties.BRIDGE_CONDITION === "F") {
      actualCondition = "Fair";
    } else if (bridge.properties.BRIDGE_CONDITION === "G") {
      actualCondition = "Good";
    } else if (bridge.properties.BRIDGE_CONDITION === "P") {
      actualCondition = "Poor";
    } else {
      actualCondition = "Unknown";
    }

    // Create a marker for each bridge with custom icon.
    let bridgeMarker = L.circleMarker([bridge.geometry.coordinates[1], bridge.geometry.coordinates[0]], {
      radius: 8, // Adjust the radius as needed
      fillColor: color,
      color: "#000", // Border color
      weight: 1, // Border width
      opacity: 1,
      fillOpacity: 0.8 // Adjust the opacity as needed
    }).bindPopup(`<h3>Structure Number: ${bridge.properties.STRUCTURE_NUMBER}</h3>
                  <p><strong>Year Built:</strong> ${bridge.properties.YEAR_BUILT}</p>
                  <p><strong>Average Daily Traffic:</strong> ${bridge.properties.AVERAGE_DAILY_TRAFFIC}</p>
                  <p><strong>Bridge Condition:</strong> ${actualCondition}</p>`);

    // Add the marker to the marker cluster group.
    markers.addLayer(bridgeMarker);
  });

  // Add the marker cluster group to the map.
  createMap(markers);
}


// Load GeoJSON data and call createMarkers function.
d3.json("National_Bridge_Inventory.geojson").then(createMarkers).catch(error => {
  console.error("Error loading GeoJSON data:", error);
});
