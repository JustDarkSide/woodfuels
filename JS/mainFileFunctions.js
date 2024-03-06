const headerImage = document.querySelector('.header__carousel-photo--photo1');
const header = document.querySelector('.header');
const cardsTextSections = document.querySelectorAll('.cards__item-text');
const navHeightSmall = 90;
const navHeightMediumAndUnusual = 120;
const carouselSectionHeightSmall = (window.innerHeight - navHeightSmall) * 0.6;
const carouselSectionHeightMediumAndUnusual =
	(window.innerHeight - navHeightMediumAndUnusual) * 0.6;
let offerSectionOffsetSmall = carouselSectionHeightSmall - 180;
let offerSectionOffsetMediumAndUnusual =
	carouselSectionHeightMediumAndUnusual - 520;
// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL) !!!
let cardNumber = 0;
let navBar = document.querySelector('.nav');
let navHeight = parseInt(
	window.getComputedStyle(navBar).getPropertyValue('height').replace('px', '')
);
let carousel = document.querySelector('.header');
let carouselHeight = parseInt(
	window.getComputedStyle(carousel).getPropertyValue('height').replace('px', '')
);
let firewoodSection = document.querySelector('.firewood');
let kindlingSection = document.querySelector('.kindling');
let briquetteSection = document.querySelector('.briquette');
let pelletSection = document.querySelector('.pellet');
let cardItems = document.querySelectorAll('.cards__item');
let summaryTopOffset =
	cardItems[cardNumber].offsetTop + carouselHeight - navHeight * 4;
const checkHeaderHeight = () => {
	if (window.innerWidth >= 768) {
		header.style.height = 'calc(60vh - 120px)';
	} else {
		header.style.height = 'calc(60vh - 90px)';
	}
};
const checkIfReadyToShow = () => {
	if (cardNumber == cardsTextSections.length) {
		return;
	} else {
		if (window.scrollY >= summaryTopOffset) {
			cardsTextSections[cardNumber].classList.add('showCardsText');
			{
				if (cardNumber <= cardItems.length - 1) {
					cardNumber++;
				}
			}
			if (
				window.innerWidth >= 768 &&
				cardNumber == cardsTextSections.length - 1
			) {
				summaryTopOffset =
					cardItems[cardNumber - 1].offsetTop + carouselHeight - navHeight * 4;
			} else if (cardNumber != cardsTextSections.length) {
				summaryTopOffset =
					cardItems[cardNumber].offsetTop + carouselHeight - navHeight * 4;
			}
		}
	}
};
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
setTimeout(showAndHidePhotos, 5000);
document.addEventListener('scroll', checkIfReadyToShow);
document.addEventListener('DOMContentLoaded', checkIfReadyToShow);
document.addEventListener('DOMContentLoaded', checkHeaderHeight);
window.addEventListener('resize', checkHeaderHeight);
