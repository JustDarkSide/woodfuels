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

const showCardsDescription = () => {
	// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL)
	if (y == cardsTextSections.length) {
		return;
	}
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
	}

	// JEŚLI SZEROKOŚĆ EKRANU PRZEKRACZA 1000 PX ALE JEST MNIEJSZA NIŻ 1200 PX TRAKTUJE TO JAKO ROZDZIELCZOŚĆ NIESTANDARDOWĄ (UNUSUAL)
};
const checkHeaderHeight = () => {
	if (window.innerWidth >= 768) {
		header.style.height = 'calc(60vh - 120px)';
	} else {
		header.style.height = 'calc(60vh - 90px)';
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
document.addEventListener('scroll', showCardsDescription);
document.addEventListener('DOMContentLoaded', showCardsDescription);
document.addEventListener('DOMContentLoaded', checkHeaderHeight);
window.addEventListener('resize', checkHeaderHeight);
