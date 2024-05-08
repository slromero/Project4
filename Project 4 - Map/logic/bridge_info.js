function createMap(bridgeInfo) {
  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    "Street Map": streetmap,
    "Topographic Map": topo
  };

  // Create the map object with options.
  let myMap = L.map("map", {
    center: [38.999972, -120.939933],
    zoom: 12,
    layers: [streetmap, bridgeInfo]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

function createMarkers(response) {
  // Pull the "features" property from response.
  let bridges = response.features;

  // Initialize the marker cluster group
  let markers = L.markerClusterGroup();

  // Loop through the bridges array.
  for (let index = 0; index < bridges.length; index++) {
    let bridge = bridges[index];

    // For each bridge, create a marker, and bind a popup with the bridge's information.
    let bridgeMarker = L.marker([bridge.geometry.coordinates[1], bridge.geometry.coordinates[0]])
      .bindPopup("<h3>" + bridge.properties.bridge_name + "</h3><h3>Bridge Type: " + bridge.properties.bridge_type + "</h3>");

    // Add the marker to the marker cluster group.
    markers.addLayer(bridgeMarker);
  }

  // Add the marker cluster group to the map.
  createMap(markers);
}

// Call JSON File
d3.json("National_Bridge_Inventory.geojson").then(createMarkers);