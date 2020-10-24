import pandas as pd
import numpy as np
import os
import pickle
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
# Loading data
PATH = "dataset/train.csv"

O_PATH = os.path.abspath(PATH)
data = pd.read_csv(O_PATH)

# Imputation of missing values

data["Gender"].fillna(data["Gender"].mode()[0], inplace = True)
data["Dependents"].fillna(data["Dependents"].mode()[0], inplace = True)
data["Self_Employed"].fillna(data["Self_Employed"].mode()[0], inplace = True)
data["Credit_History"].fillna(data["Credit_History"].mode()[0], inplace = True)
data["Loan_Amount_Term"].fillna(data["Loan_Amount_Term"].mode()[0], inplace = True)
data["LoanAmount"].fillna(data["LoanAmount"].median(), inplace = True)
data["LoanAmount_log"] = np.log(data["LoanAmount"])

# Model Building

# Dropping Loan ID because it is not an important feature for prediction
data = data.drop('Loan_ID', axis = 1)

# Doing one hot encoding
data['Loan_Status'].replace("Y", 1, inplace = True)
data['Loan_Status'].replace("N", 0, inplace = True)
data['Married'] = pd.get_dummies(data['Married']).drop('No', axis = 1)
data['Education'] = pd.get_dummies(data['Education']).drop('Not Graduate', axis = 1)
data['Self_Employed'] = pd.get_dummies(data['Self_Employed']).drop('No', axis = 1)
data['Gender'] = pd.get_dummies(data['Gender']).drop('Female', axis = 1)
data['Dependents0'] = pd.get_dummies(data['Dependents'])['0']
data['Dependents1'] = pd.get_dummies(data['Dependents'])['1']
data['Dependents2'] = pd.get_dummies(data['Dependents'])['2']
data.drop('Dependents', 1, inplace = True)
data = pd.concat([pd.get_dummies(data['Property_Area']).drop('Urban', 1), data.drop('Property_Area', 1)], axis = 1)

X = data.drop('Loan_Status', axis = 1)
y = data["Loan_Status"]

# split into train test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state = 1)

# Accuracy on train
model = LogisticRegression(random_state = 4)

model.fit(X_train, y_train)

y_pred_train = model.predict(X_train)

train_acc = accuracy_score(y_pred_train, y_train)*100

print("train accuracy: ", train_acc)

# Accuracy on test
y_pred = model.predict(X_test)

test_acc = accuracy_score(y_pred, y_test)*100

print("test accuracy: ", test_acc)

# Storing the model

filename = "model.pkl"

with open(filename, 'wb') as file:
    pickle.dump(model, file)
