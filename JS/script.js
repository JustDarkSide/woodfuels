const navbarMobileLogo = document.querySelector(
	'.nav__mobile .nav__item--logo img'
);
document.body.addEventListener('click', () => {
	if (window.innerWidth >= 768) {
		navbarMobileLogo.setAttribute('src', '../img/logo.png');
	} else {
		navbarMobileLogo.setAttribute('src', '../img/logo-smaller.png');
	}
});
