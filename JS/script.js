const mbNav = document.querySelector('.mobile-nav');
const bBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.mb-nav__item');
const header = document.querySelector('.header');
const headerImage = document.querySelector('.header__carousel-photo--photo1');
const navSpace = document.querySelector('.nav');
const offsetDiv = document.querySelector('.offset');
const logoImg = document.querySelector('.solo-logo-item-img');
const cardsTextSections = document.querySelectorAll('.cards__item-text');
const navHeightSmall = 90;
const navHeightMediumAndUnusual = 120;
const carouselSectionHeightSmall = (window.innerHeight - navHeightSmall) * 0.6;
const carouselSectionHeightMediumAndUnusual =
	(window.innerHeight - navHeightMediumAndUnusual) * 0.6;
let offerSectionOffsetSmall = carouselSectionHeightSmall - 60;
let offerSectionOffsetMediumAndUnusual =
	carouselSectionHeightMediumAndUnusual - 180;
// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL) !!!

let i = 1;
let y = 0;
//-------------NAV--------------
const offsetTimeout = () => {
	setTimeout(() => {
		if (mbNav.classList.contains('mobile-nav--active')) {
			offsetDiv.classList.add('showShadow');
			offsetDiv.classList.remove('hideShadow');
		} else {
			offsetDiv.classList.remove('showShadow');
			offsetDiv.classList.add('hideShadow');
		}
	}, 50);
};

const handleNav = () => {
	document.body.classList.toggle('mobileMenuLock');
	mbNav.classList.toggle('mobile-nav--active');
	offsetTimeout();

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			document.body.classList.toggle('mobileMenuLock');
			mbNav.classList.remove('mobile-nav--active');
			offsetTimeout();
		});
	});
};

//-------------HEADER-----------------
const showAndHidePhotos = () => {
	headerImage.classList.toggle('show');
	headerImage.classList.toggle('hide');
	if (i == 5) {
		i = 0;
	}
	i++;
	setTimeout(() => {
		if (window.innerWidth > 768) {
			headerImage.style.backgroundImage =
				"url('" + `../img/carousel-item${i}-big.jpg')`;
		} else {
			headerImage.style.backgroundImage =
				"url('" + `../img/carousel-item${i}-small.jpg')`;
		}
		// if (window.innerWidth <= 768 && i == 2) {
		// 	headerImage.style.backgroundPosition = '0 0';
		// } else if (window.innerWidth >= 1200 && i == 2) {
		// 	headerImage.style.backgroundPosition = '0 -110px';
		// } else if (window.innerWidth >= 1200 && i == 4) {
		// 	headerImage.style.backgroundPosition = '0 -300px';
		// } else if (window.innerWidth >= 1200 && i == 5) {
		// 	headerImage.style.backgroundPosition = '0 -200px';
		// } else {
		// 	headerImage.style.backgroundPosition = '0 0';
		// }
	}, 1300);
	setTimeout(() => {
		headerImage.classList.toggle('show');
		headerImage.classList.toggle('hide');
	}, 1400);
	setTimeout(showAndHidePhotos, 5000);
};

const checkScreenWidth = () => {
	if (window.innerWidth >= 768) {
		header.style.height = 'calc(60vh - 120px)';
	} else {
		header.style.height = 'calc(60vh - 90px)';
	}

	if (window.innerWidth <= 400) {
		logoImg.setAttribute('src', '../img/logo-circle-pc-apr.png');
	}
};

const showCardsDescription = () => {
	if (y == 4) {
		return;
	}
	if (window.scrollY >= offerSectionOffsetSmall && window.innerWidth < 768) {
		cardsTextSections[y].classList.add('showCardsText');
		y++;
		offerSectionOffsetSmall += 400;
	} else if (
		window.scrollY >= offerSectionOffsetMediumAndUnusual &&
		window.innerWidth >= 768 &&
		window.innerWidth < 1200
	) {
		cardsTextSections[y].classList.add('showCardsText');
		y++;
		if (y == 2) {
			offerSectionOffsetMediumAndUnusual += 500;
		}
	} else if (
		window.scrollY >= offerSectionOffsetMediumAndUnusual &&
		window.innerWidth >= 1000 &&
		window.innerWidth < 1200
	) {
		cardsTextSections[y].classList.add('showCardsText');
		y++;
		if (y == 2) {
			offerSectionOffsetMediumAndUnusual += 550;
		}
	}

	// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL)
};

setTimeout(showAndHidePhotos, 5000);

//--------------EVENTS----------------
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
bBtn.addEventListener('click', handleNav);
document.addEventListener('scroll', showCardsDescription);
document.addEventListener('DOMContentLoaded', showCardsDescription);

navSpace.addEventListener('focusout', () => {
	//Kacperek zabłysnął
	document.body.classList.toggle('mobileMenuLock');
	mbNav.classList.remove('mobile-nav--active');
	offsetTimeout();
	//to zrobił dominik elegancko nie
});
