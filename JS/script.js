const mbNav = document.querySelector('.mobile-nav');
const bBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.mb-nav__item');
const header = document.querySelector('.header');
const headerImage = document.querySelector('.header__carousel-photo--photo1');
const navSpace = document.querySelector('.nav');
const offsetDiv = document.querySelector('.offset');
let i = 1;

navSpace.addEventListener('focusout', () => {
	//Kacperek zabłysnął
	mbNav.classList.remove('mobile-nav--active');
	setTimeout(() => {
		if (mbNav.classList.contains('mobile-nav--active')) {
			offsetDiv.classList.add('showShadow');
			offsetDiv.classList.remove('hideShadow');
		} else {
			offsetDiv.classList.remove('showShadow');
			offsetDiv.classList.add('hideShadow');
		}
	}, 50);
	//to zrobił dominik elegancko nie
});
const handleNav = () => {
	mbNav.classList.toggle('mobile-nav--active');
	setTimeout(() => {
		if (mbNav.classList.contains('mobile-nav--active')) {
			offsetDiv.classList.add('showShadow');
			offsetDiv.classList.remove('hideShadow');
		} else {
			offsetDiv.classList.remove('showShadow');
			offsetDiv.classList.add('hideShadow');
		}
	}, 50);

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			mbNav.classList.remove('mobile-nav--active');
			setTimeout(() => {
				if (mbNav.classList.contains('mobile-nav--active')) {
					offsetDiv.classList.add('showShadow');
					offsetDiv.classList.remove('hideShadow');
				} else {
					offsetDiv.classList.remove('showShadow');
					offsetDiv.classList.add('hideShadow');
				}
			}, 50);
		});
	});
};

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
		header.style.height = 'calc(100vh - 120px)';
	} else {
		header.style.height = 'calc(100vh - 90px)';
	}
};
setTimeout(showAndHidePhotos, 5000);
document.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
bBtn.addEventListener('click', handleNav);
