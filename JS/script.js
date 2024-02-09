const navbarMobileLogo = document.querySelector(
	'.nav__mobile .nav__item--logo img'
);
const headerImage = document.querySelector('.header__carousel-photo--photo1');
document.body.addEventListener('click', () => {
	if (window.innerWidth >= 768) {
		navbarMobileLogo.setAttribute('src', '../img/logo.png');
	} else {
		navbarMobileLogo.setAttribute('src', '../img/logo-smaller.png');
	}
});
document.addEventListener('DOMContentLoaded', () => {
	let i = 1;
	setInterval(() => {
		headerImage.classList.toggle('show');
		headerImage.classList.toggle('hide');
	}, 3500);
	setInterval(() => {
		i++;
		headerImage.style.backgroundImage =
			"url('" + `../img/carousel-item${i}-big.jpg')`;
		if (i == 3) {
			i = 0;
		}
	}, 7000);
});
