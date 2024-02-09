const navbarMobileLogo = document.querySelector(
	'.nav__mobile .nav__item--logo img'
);
const header = document.querySelector('.header');
const headerImage = document.querySelector('.header__carousel-photo--photo1');
let i = 1;

const showAndHidePhotos = () => {
	headerImage.classList.toggle('show');
	headerImage.classList.toggle('hide');
	if (i == 3) {
		i = 0;
	}
	i++;
	setTimeout(() => {
		headerImage.style.backgroundImage =
			"url('" + `../img/carousel-item${i}-big.jpg')`;
	}, 1300);
	setTimeout(() => {
		headerImage.classList.toggle('show');
		headerImage.classList.toggle('hide');
	}, 1400);
	setTimeout(showAndHidePhotos, 5000);
};
const checkScreenWidth = () => {
	if (window.innerWidth >= 768) {
		navbarMobileLogo.setAttribute('src', '../img/logo.png');
		header.style.height = 'calc(100vh - 120px)';
	} else {
		navbarMobileLogo.setAttribute('src', '../img/logo-smaller.png');
		header.style.height = 'calc(100vh - 100px)';
	}
};
setTimeout(showAndHidePhotos, 5000);
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
