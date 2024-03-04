const mbNav = document.querySelector('.mobile-nav');
const bBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.mb-nav__item');
const navSpace = document.querySelector('.nav');
const offsetDiv = document.querySelector('.offset');
const logoImg = document.querySelector('.solo-logo-item-img');

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

const checkScreenWidth = () => {
	if (window.innerWidth >= 768) {
		dropdownMobilePlusIcon.setAttribute('src', '../img/plus-medium.svg');
		dropdownMobileMinusIcon.setAttribute('src', '../img/minus-medium.svg');
	} else {
		dropdownMobilePlusIcon.setAttribute('src', '../img/plus-small.svg');
		dropdownMobileMinusIcon.setAttribute('src', '../img/minus-small.svg');
	}

	if (window.innerWidth <= 400) {
		logoImg.setAttribute('src', '../img/logo-circle-pc-apr.png');
	}
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

//--------------EVENTS----------------
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
bBtn.addEventListener('click', handleNav);
dropdownMobileIcon.addEventListener('click', showDropdownElementsMobile);
mobileOfferMainItem.addEventListener('click', showDropdownElementsMobile);
offsetDiv.addEventListener('click', () => {
	mbNav.classList.remove('mobile-nav--active');
	document.body.classList.remove('mobileMenuLock');
	offsetTimeout();
});
document.addEventListener('DOMContentLoaded', footerDateFunction);
