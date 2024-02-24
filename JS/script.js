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
let offerSectionOffsetSmall = carouselSectionHeightSmall - 120;
let offerSectionOffsetMediumAndUnusual =
	carouselSectionHeightMediumAndUnusual - 520;
// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL) !!!
const mobileOfferMainItem = document.querySelector(
	'.dropdown__mobile--mainDropdownItem'
);
const dropdownMobileIcon = document.querySelector('.dropdown__mobile-icon');
const dropdownSectionMobile = document.querySelector('.dropdown__mobile');
const dropdownListMobile = document.querySelector(
	'.dropdown__mobile .dropdown__mobile-list'
);
const dropdownMobilePlusIcon = document.querySelector('.plus');
const dropdownMobileMinusIcon = document.querySelector('.minus');
const dropdownMobileItems = document.querySelectorAll(
	'.dropdown__mobile-list-item'
);
const footerDate = document.querySelector('.footer__date');

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
			if (!item.firstElementChild.classList.contains('dropdown__mobile')) {
				mbNav.classList.remove('mobile-nav--active');
				document.body.classList.remove('mobileMenuLock');
				offsetTimeout();
			}
		});
	});
	dropdownMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			mbNav.classList.remove('mobile-nav--active');
			document.body.classList.remove('mobileMenuLock');
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
		dropdownMobilePlusIcon.setAttribute('src', '../img/plus-medium.svg');
		dropdownMobileMinusIcon.setAttribute('src', '../img/minus-medium.svg');
	} else {
		header.style.height = 'calc(60vh - 90px)';
		dropdownMobilePlusIcon.setAttribute('src', '../img/plus-small.svg');
		dropdownMobileMinusIcon.setAttribute('src', '../img/minus-small.svg');
	}

	if (window.innerWidth <= 400) {
		logoImg.setAttribute('src', '../img/logo-circle-pc-apr.png');
	}
};

const showCardsDescription = () => {
	// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL)
	if (window.scrollY >= offerSectionOffsetSmall && window.innerWidth < 768) {
		cardsTextSections[y].classList.add('showCardsText');
		y++;
		offerSectionOffsetSmall += 450;
	} else if (
		window.scrollY >= offerSectionOffsetMediumAndUnusual &&
		window.innerWidth >= 768 &&
		window.innerWidth < 1200
	) {
		cardsTextSections[y].classList.add('showCardsText');
		y++;
		if (y == 2) {
			offerSectionOffsetMediumAndUnusual += 550;
		}
	} else if (
		window.scrollY >= offerSectionOffsetMediumAndUnusual &&
		window.innerWidth >= 1000 &&
		window.innerWidth < 1200
	) {
		cardsTextSections[y].classList.add('showCardsText');
		y++;
		// if (y == 2) {
		// 	offerSectionOffsetMediumAndUnusual += 550;
		// }
	}

	// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL)
};

const showDropdownElementsMobile = () => {
	dropdownListMobile.classList.toggle('dropdown__mobile-list--active');
	dropdownMobilePlusIcon.classList.toggle('showProperMobileDropdownIcon');
	dropdownMobileMinusIcon.classList.toggle('showProperMobileDropdownIcon');
	dropdownSectionMobile.classList.toggle('dropdown__mobile--active');
};

const footerDateFunction = () => {
	const dateYear = new Date();
	footerDate.textContent = dateYear.getFullYear();
};

setTimeout(showAndHidePhotos, 5000);

//--------------EVENTS----------------
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
bBtn.addEventListener('click', handleNav);
document.addEventListener('scroll', showCardsDescription);
document.addEventListener('DOMContentLoaded', showCardsDescription);
dropdownMobileIcon.addEventListener('click', showDropdownElementsMobile);
mobileOfferMainItem.addEventListener('click', showDropdownElementsMobile);
offsetDiv.addEventListener('click', () => {
	mbNav.classList.remove('mobile-nav--active');
	document.body.classList.remove('mobileMenuLock');
	offsetTimeout();
});
document.addEventListener('DOMContentLoaded', footerDateFunction);
