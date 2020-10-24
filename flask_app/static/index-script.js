const loan_amt_slider = document.querySelector("input[type = 'range']");
const loan_amt_term = document.querySelector('.loan-term-value');
loan_amt_term.textContent = "360";
loan_amt_slider.addEventListener('change', (event) => {
	const loan_amt_term = document.querySelector('.loan-term-value');
	loan_amt_term.textContent = loan_amt_slider.value;
});

const hd = document.querySelector(".hide")
if(hd)
{
	hd.onclick = function(event){
		const msg = document.querySelector('.message');
		msg.remove();	
	}
}
