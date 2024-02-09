const navbarMobileLogo = document.querySelector(
	'.nav__mobile .nav__item--logo img'
);
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
	}, 1200);
	setTimeout(() => {
		headerImage.classList.toggle('show');
		headerImage.classList.toggle('hide');
	}, 1200);
	setTimeout(showAndHidePhotos, 5000);
};
setTimeout(showAndHidePhotos, 5000);

document.body.addEventListener('click', () => {
	if (window.innerWidth >= 768) {
		navbarMobileLogo.setAttribute('src', '../img/logo.png');
	} else {
		navbarMobileLogo.setAttribute('src', '../img/logo-smaller.png');
	}
});
