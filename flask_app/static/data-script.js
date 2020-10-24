let curr_i = 0;
let curr_iu = 0;
const image_arr_uni = ['static/plots/Univariate_Analysis/ApplicantIncomeBinned.jpg',
						'static/plots/Univariate_Analysis/ApplicantIncomeBoxPlot.jpg',
						'static/plots/Univariate_Analysis/ApplicantIncomeByEducation.jpg',
						'static/plots/Univariate_Analysis/ApplicantIncomeDistribution.jpg',
						'static/plots/Univariate_Analysis/CoapplicantIncomeBoxPlot.jpg',
						'static/plots/Univariate_Analysis/CoapplicantIncomeDistribution.jpg',
						'static/plots/Univariate_Analysis/CreditHistory.jpg',
						'static/plots/Univariate_Analysis/dependents.jpg',
						'static/plots/Univariate_Analysis/education.jpg',
						'static/plots/Univariate_Analysis/gender.jpg',
						'static/plots/Univariate_Analysis/LoanAmountBoxPlot.jpg',
						'static/plots/Univariate_Analysis/LoanAmountDistribution.jpg',
						'static/plots/Univariate_Analysis/LoanAmountLog.jpg',
						'static/plots/Univariate_Analysis/loan_status.jpg',
						'static/plots/Univariate_Analysis/married.jpg',
						'static/plots/Univariate_Analysis/PropertyArea.jpg',
						'static/plots/Univariate_Analysis/SelfEmployed.jpg']

const image_arr = ['static/plots/Bivariate_Analysis/CoapplicantIncomeBinnedvsLoanStatus.jpg',
	             'static/plots/Bivariate_Analysis/LoanAmountBinnedvsLoanStatus.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsApplicantIncome.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsApplicantIncomeBinned.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsCreditHistory.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsDependents.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsEducation.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsGender.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsMarried.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsPropertyArea.jpg', 
	             'static/plots/Bivariate_Analysis/LoanStatusvsSelfEmployed.jpg', 
	             'static/plots/Bivariate_Analysis/TotalIncomeBinnedvsLoanStatus.jpg']

document.querySelector('.uni-carousel .prev').onclick = function(){
	if(curr_iu == 0)
	{
		curr_iu = image_arr_uni.length -1;
	}
	else{
		curr_iu -= 1;
	}
	this.style.background = '#0f5';
	setTimeout(()=> {
		document.querySelector('.uni-carousel .prev').style.background = '#ff7400'
	}, 100);
	document.querySelector('.uni-carousel img').setAttribute('src', image_arr_uni[curr_iu]);

}

document.querySelector('.uni-carousel .next').onclick = function(){
	if(curr_iu == image_arr.length - 1)
	{
		curr_iu = 0;
	}
	else{
		curr_iu += 1;
	}
	this.style.background = '#0f5';
	setTimeout(()=> {
		document.querySelector('.uni-carousel .next').style.background = '#ff7400'
	}, 100)
	document.querySelector('.uni-carousel img').setAttribute('src', image_arr_uni[curr_iu]);
}

document.querySelector('.bi-carousel .prev').onclick = function() {
	
	if (curr_i == 0) {
		curr_i = image_arr.length - 1;
	} else {
		curr_i -= 1;
	}

	this.style.background = '#0f5';
	setTimeout(()=> {
		document.querySelector('.bi-carousel .prev').style.background = '#ff7400'
	}, 100)

	document.querySelector('.bi-carousel img').setAttribute('src', image_arr[curr_i]);


}

document.querySelector('.bi-carousel .next').onclick = function() {
	
	
	if (curr_i == image_arr.length - 1) {
		curr_i = 0;
	} else {
		curr_i += 1;
	}
	this.style.background = '#0f5';
	setTimeout(()=> {
		document.querySelector('.bi-carousel .next').style.background = '#ff7400'
	}, 100)
	document.querySelector('.bi-carousel img').setAttribute('src', image_arr[curr_i]);


}


setInterval(()=> {
	if (curr_i == image_arr.length - 1) {
		curr_i = 0;
	} else {
		curr_i += 1;
	}
	document.querySelector('.bi-carousel img').setAttribute('src', image_arr[curr_i])

}, 5000)

setInterval(()=> {
	if (curr_iu == image_arr_uni.length - 1) {
		curr_iu = 0;
	} else {
		curr_iu += 1;
	}
	document.querySelector('.uni-carousel img').setAttribute('src', image_arr_uni[curr_iu])

}, 5000)
