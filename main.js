const menuBtn = document.querySelector('#small-menu-button');
const closeBtn = document.querySelector('#close-menu');

menuBtn.addEventListener('click', working);
closeBtn.addEventListener('click', working);

function working() {
	const menu = document.querySelector('#hamburguer-menu');
	menu.classList.toggle('hamburguer-menu-display');
}
