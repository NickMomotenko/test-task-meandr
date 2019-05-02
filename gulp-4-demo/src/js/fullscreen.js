// svg4everybody();

// fullscreen
var fullmenu = document.querySelector('.fullscreen');
var burger = document.querySelector('.burger');
var menuList = document.querySelector('.fullscreen .menu__list');
var formCross = document.querySelector('.form__cross');
var modal = document.querySelector('.modal');

var buttonPrice = document.querySelector('.button--price');


burger.addEventListener('click' , showFullmenu);
buttonPrice.addEventListener('click' , showOrCloseModal);
formCross.addEventListener('click' , showOrCloseModal);

function showFullmenu() {
	fullmenu.classList.toggle('is-active');
	document.body.classList.toggle('overflow');
	burger.classList.toggle('getCross');
}


menuList.addEventListener('click', e=>{
	if(e.target.classList.contains('menu__link')){
		showFullmenu();
	}
});

function showOrCloseModal(e) {
	e.preventDefault();
	modal.classList.toggle('open');
	document.body.classList.toggle('overflow');
}




