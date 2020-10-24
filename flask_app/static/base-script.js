const button = document.querySelector('.menu-icon');
const icon = document.querySelectorAll('.menu-icon *');
button.addEventListener('click', function (event) {
  const menu = document.querySelector('.mobile-navbar');
  const icon = document.querySelectorAll('.menu-icon *');
  const sel = window.getComputedStyle(icon[1], null);
	if(sel.getPropertyValue('background') !== 'rgba(255, 255, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box')
	{
		icon[0].style.transformOrigin = "left";
		icon[0].style.transform = "rotate(45deg)";
		icon[2].style.transformOrigin = "left";
		icon[2].style.transform = "rotate(-45deg)";
		icon[1].style.transform = "translate(-100%)";
		icon[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
		menu.style.transform = "translate(-100%)";
	}
	else{
		icon[0].style.transformOrigin = "left";
		icon[0].style.transform = "rotate(0deg)";
		icon[2].style.transformOrigin = "left";
		icon[2].style.transform = "rotate(0deg)";
		icon[1].style.transform = "translate(0)";
		icon[1].style.backgroundColor = "rgba(255, 255, 255, 1)";
		menu.style.transform = "translate(0)";	
	}
});

