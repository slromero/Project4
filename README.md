# Project4
Project 4: Marco, Wes, Sowmya, Mary, Sharon






### Data Preparation: 
The data underwent preprocessing to ensure readiness for modeling. Initially, key features were manually selected to include the most important and relevant ones for modeling purposes. Categorical data were then analyzed and transformed to have fewer than 10 variables, employing a binning approach. Year dates were converted into numerical values relative to the current year, and NaN values were subsequently removed. The finalized dataset was exported as a CSV file named 'bridge_testing_dataset.csv'.

### Modeling: 
Different models were employed to assess the data, including Logistic Regression, CatBoostClassifier, and Multi-layer Perceptron classifier models. The initial dataset encompassed various states across the USA, spanning the East, West, North, South, and Midwest regions. Collinearity within the data was evaluated using correlation functions, with columns exhibiting a correlation score higher than 0.77 being removed. Following this, features were further streamlined to simplify the model and prevent overfitting. The dataset was then split, and categorical data were transformed using one-hot encoding. Feature scaling was applied using 'StandardScaler', and outliers were removed.

#### Logistic Regression: 
Training Data: The model showcased robust performance across all classes, achieving high precision, recall, and F1-score metrics. Particularly noteworthy was the model's ability to accurately identify bridges in "Good" condition, yielding the highest precision and recall scores. However, performance for bridges categorized as "Poor" was relatively lower, with decreased precision and recall scores. The overall accuracy achieved was 84%.
Testing Data: Similar trends were observed in the classification report for the testing data, with the model maintaining high precision, recall, and F1-score metrics, particularly for "Good" and "Fair" bridge conditions. The total accuracy remained at 84%.

![LogisticRegression_classification_report](https://github.com/slromero/Project4/assets/150491559/56a167bd-1121-47a7-8dea-5de011502a8e)

#### CatBoostClassifier: 
The CatBoostClassifier exhibited slightly lower accuracy compared to the Logistic Regression model, achieving a total accuracy of 83%.

![CatBoostClassifier_classification_report](https://github.com/slromero/Project4/assets/150491559/306078cd-3591-49e1-a313-e100aa1e2681)


#### Multi-layer Perceptron classifier: 
This model demonstrated the best performance thus far on both the training and testing data.
Training Data:
For the training data, the model demonstrates robust performance across all classes. The precision, recall, and F1-score metrics indicate that the model achieves high accuracy in predicting the condition of bridges. Notably, the model achieves the highest precision and recall for bridges categorized as "Good," indicating that it accurately identifies bridges in good condition. However, it's noteworthy that the performance for bridges in "Poor" condition is relatively lower compared to other classes, with lower precision and recall scores.
Testing Data:
The classification report for the testing data reveals similar trends to the training data. The model maintains high precision, recall, and F1-score metrics across different bridge conditions. However, there's a slight decrease in performance compared to the training data, which is expected when evaluating model performance on unseen data.

![MLP_classification_report](https://github.com/slromero/Project4/assets/150491559/eea86cd7-6fe4-4995-8813-129d616df92f)


### Classification of New Data: 
To validate the model, two random states not previously used in training were selected, and the Multi-layer Perceptron classifier was employed to predict bridge conditions in the new dataset. The model's performance remained commendable, with slight variations compared to the training and testing data. Notably, there was an improvement in recall scores for bridges categorized as "Poor."

![TX_AZ_classification_report](https://github.com/slromero/Project4/assets/150491559/5f45b39c-9ae4-4ef1-b68f-933f7e6b9f03)


## Conclusion: 
In conclusion, the model exhibits strong predictive capabilities across different datasets, particularly in identifying bridges in good condition. Continuous monitoring and refinement of the model are necessary to enhance its predictive accuracy further, especially for bridges categorized as "Poor." Nevertheless, it's essential to note that overestimating the poor condition of a bridge may not pose as significant a risk as underestimating it, given the paramount importance of safety for drivers.

#### Assessment of 2007 Bridge Accident: 
The model successfully predicted a poor condition for the bridge involved in the 2007 I-35W Saint Anthony Falls Bridge collapse. This underscores the accuracy and significance of having a robust model in predicting bridge conditions, emphasizing its critical role in ensuring public safety.


![Bridge_9340_prediction](https://github.com/slromero/Project4/assets/150491559/a11bfbfa-5f23-40d5-b399-9b4885aef33e)





