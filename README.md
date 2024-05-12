# Project4
Project 4: Marco, Wes, Sowmya, Mary, Sharon


Presentation Link 
<https://docs.google.com/presentation/d/1eO_FN8d4ZQWQKt_0WELsXPcMgEBmd1EbFf8OB8AyI78/>



### Data Preparation: 
The data underwent preprocessing to ensure readiness for modeling. Initially, key features were manually selected to include the most important and relevant ones for modeling purposes. Categorical data were then analyzed and transformed to have fewer than 10 variables, employing a binning approach. Year dates were converted into numerical values relative to the current year, and NaN values were subsequently removed. The finalized dataset was exported as a CSV file named 'bridge_testing_dataset.csv'.

### Modeling: 
Different models were employed to assess the data, including Logistic Regression, CatBoostClassifier, and Multi-layer Perceptron classifier models. The initial dataset encompassed various states across the USA, spanning the East, West, North, South, and Midwest regions. Collinearity within the data was evaluated using correlation functions, with columns exhibiting a correlation score higher than 0.77 being removed. Following this, features were further streamlined to simplify the model and prevent overfitting. The dataset was then split, and categorical data were transformed using one-hot encoding. Feature scaling was applied using 'StandardScaler', and outliers were removed.

#### Logistic Regression: 
Training Data: The model showcased robust performance across all classes, achieving high precision, recall, and F1-score metrics. Particularly noteworthy was the model's ability to accurately identify bridges in "Good" condition, yielding the highest precision and recall scores. However, performance for bridges categorized as "Poor" was relatively lower, with decreased precision and recall scores. The overall accuracy achieved was 84%.
Testing Data: Similar trends were observed in the classification report for the testing data, with the model maintaining high precision, recall, and F1-score metrics, particularly for "Good" and "Fair" bridge conditions. The total accuracy remained at 84%.

<img width="311" alt="LogisticRegression_classification_report" src="https://github.com/slromero/Project4/assets/150491559/4ad858fd-96b0-4404-8b2b-a8e9d05f5913">


#### CatBoostClassifier: 
The CatBoostClassifier exhibited slightly lower accuracy compared to the Logistic Regression model, achieving a total accuracy of 83%.

<img width="295" alt="CatBoostClassifier_classification_report" src="https://github.com/slromero/Project4/assets/150491559/aacd3fbe-bdad-44e7-a29a-f26a27f3a28b">


#### Multi-layer Perceptron classifier: 
This model demonstrated the best performance thus far on both the training and testing data.
Training Data:
For the training data, the model demonstrates robust performance across all classes. The precision, recall, and F1-score metrics indicate that the model achieves high accuracy in predicting the condition of bridges. Notably, the model achieves the highest precision and recall for bridges categorized as "Good," indicating that it accurately identifies bridges in good condition. However, it's noteworthy that the performance for bridges in "Poor" condition is relatively lower compared to other classes, with lower precision and recall scores.
Testing Data:
The classification report for the testing data reveals similar trends to the training data. The model maintains high precision, recall, and F1-score metrics across different bridge conditions. However, there's a slight decrease in performance compared to the training data, which is expected when evaluating model performance on unseen data.

<img width="302" alt="MLP_classification_report" src="https://github.com/slromero/Project4/assets/150491559/b51f47dd-2757-4122-aae5-9b58ba73a99d">



### Classification of New Data: 
To validate the model, two random states not previously used in training were selected, and the Multi-layer Perceptron classifier was employed to predict bridge conditions in the new dataset. The model's performance remained commendable, with slight variations compared to the training and testing data. Notably, there was an improvement in recall scores for bridges categorized as "Poor."

<img width="511" alt="TX_AZ_classification_report" src="https://github.com/slromero/Project4/assets/150491559/45bc5217-64f0-419a-ba73-4af1d1cb55e0">



## Conclusion: 
In conclusion, the model exhibits strong predictive capabilities across different datasets, particularly in identifying bridges in good condition. Continuous monitoring and refinement of the model are necessary to enhance its predictive accuracy further, especially for bridges categorized as "Poor." Nevertheless, it's essential to note that overestimating the poor condition of a bridge may not pose as significant a risk as underestimating it, given the paramount importance of safety for drivers.

#### Assessment of 2007 Bridge Accident: 
The model successfully predicted a poor condition for the bridge involved in the 2007 I-35W Saint Anthony Falls Bridge collapse. This underscores the accuracy and significance of having a robust model in predicting bridge conditions, emphasizing its critical role in ensuring public safety.

<img width="457" alt="Bridge_9340_prediction" src="https://github.com/slromero/Project4/assets/150491559/3dc0743c-3ad9-48cc-a278-0879e42d72ba">


# Reference
Data Source: Bureau Of Transportation Statistics
https://geodata.bts.gov/datasets/national-bridge-inventory/explore?location=2.461768%2C-13.432209%2C0.98





