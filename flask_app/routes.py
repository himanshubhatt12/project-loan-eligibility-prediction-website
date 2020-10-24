from flask_app import app 
from flask import render_template, redirect, url_for, request
import numpy as np
import pickle
import os
@app.route('/')
@app.route('/home')
def home_page():
	return render_template('index.html')

@app.route('/predict', methods = ['POST'])
def prediction():
	email =  request.form["email"]
	gender = request.form["gender"]
	'''
	1 -> male
	0->female
	'''
	gender = int(gender)
	married = request.form["marital-status"]
	'''
	1->Married
	0->Not Married
	'''
	married = int(married)

	edu = request.form["education"]
	'''
	0->Not Graduate
	1-> Graduate
	'''
	edu = int(edu)

	dep = request.form["dependents"]
	'''
	Dependents0 Dependents1 Dependents2	Dependents
	    0          0            0          3+
	    1          0            0          0
	    0          1            0          1
	    0          0            1		   2
	
	'''
	if dep == "0":
		Dependents0 = 1
		Dependents1 = 0
		Dependents2 = 0
	elif dep == "1":
		Dependents0 = 0
		Dependents1 = 1
		Dependents2 = 0
	elif dep == "2":
		Dependents0 = 0
		Dependents1 = 0
		Dependents2 = 1
	elif dep == "3":
		Dependents0 = 0
		Dependents1 = 0
		Dependents2 = 0

	prop = request.form["prop-area"]
	if prop == "Urban":
		rural = 0
		semiurban = 0
	elif prop == "Rural":
		rural = 1
		semiurban = 0
	elif prop == "SemiUrban":
		rural = 0
		semiurban = 1
	s_emp = int(request.form["self-emp"])

	income_a = float(request.form["income-applicant"])
	income_a /= 10

	income_co = float(request.form["income-coapplicant"])
	income_co /= 10 

	cred_hist = float(request.form["credit-hist"])

	loan_amt = float(request.form["loan-amt"])
	loan_amt /= 10000

	loan_amt_log = np.log(loan_amt)

	loan_amt_term = request.form["loan-term"]

	'''
	['Rural', 'Semiurban', 'Gender', 'Married', 'Education', 'Self_Employed',
       'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount',
       'Loan_Amount_Term', 'Credit_History', 'LoanAmount_log',
       'Dependents0', 'Dependents1', 'Dependents2']
	'''
	ip_data = np.array([rural, semiurban, gender, married, edu, 
			s_emp, income_a, income_co, loan_amt, loan_amt_term, cred_hist, 
			loan_amt_log, Dependents0, Dependents1, Dependents2], dtype = int)
	ip_data = ip_data.reshape(1, -1)
	filename = "model.pkl"
	with open(filename, 'rb') as file:
		model = pickle.load(file)
	pred = model.predict(ip_data)
	if pred[0] == 1:
		# eligible
		pred_text = "You are eligible for the loan"
	else:
		# not eligible
		pred_text = "You are not eligible for the loan"
	return render_template("index.html", pred_text = pred_text, pred = True)

@app.route('/d-insights')
def data_insights():
	return render_template("data-insights.html")
