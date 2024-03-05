const mainPhoto = document.querySelector('.photo');
const otherPhotosBox = document.querySelector('.thumbnails-box');
const thumbnailPhotoBox = document.querySelectorAll(
	'.thumbnails-box .img-box div'
);
const thumbnailPhotos = document.querySelectorAll(
	'.thumbnails-box .img-box img'
);
const bigLeftArrow = document.querySelector('.arrow-left');
const bigRightArrow = document.querySelector('.arrow-right');
const smallLeftArrow = document.querySelector('.small-arrow-left');
const smallRightArrow = document.querySelector('.small-arrow-right');
let previousThumbnailIndex = 0;
let previousPhotoIndex = 0;
let photoIndex = 0;
let thumbnailIndex = 0;
let pathCollection = [];
let touchstart = 0;
let touchend = 0;
let scrollValue = 0;
let decreasingIndex = 0;
let increasingIndex = 0;
let fullThumbnailSize = 0;

const setRightElementProperties = () => {
	let thumbnailMarginLeft = window
		.getComputedStyle(thumbnailPhotoBox[thumbnailIndex])
		.getPropertyValue('margin-top');
	let thumbnailMarginRight = window
		.getComputedStyle(thumbnailPhotoBox[thumbnailIndex])
		.getPropertyValue('margin-bottom');
	thumbnailMarginLeft = parseInt(thumbnailMarginLeft.replace('px', ''));
	thumbnailMarginRight = parseInt(thumbnailMarginRight.replace('px', ''));
	let thumbnailHeight = Math.round(
		window
			.getComputedStyle(thumbnailPhotoBox[thumbnailIndex])
			.getPropertyValue('height')
			.replace('px', '')
	);

	fullThumbnailSize =
		thumbnailHeight + thumbnailMarginLeft + thumbnailMarginRight;
	if (thumbnailIndex == 0) {
		smallLeftArrow.style.opacity = 0.4;
		smallLeftArrow.style.pointerEvents = 'none';
	}
	if (photoIndex == 0) {
		bigLeftArrow.style.opacity = 0.4;
		bigLeftArrow.style.pointerEvents = 'none';
	}
};
const collectAllPathsInfo = () => {
	for (let i = 0; i < thumbnailPhotoBox.length; i++) {
		let photoPath = window
			.getComputedStyle(thumbnailPhotoBox[i])
			.getPropertyValue('background-image');
		photoPath = photoPath.slice(photoPath.indexOf('/img'));
		photoPath = photoPath.replace('")', '');
		photoPath = '..' + photoPath;

		pathCollection.push(photoPath);
	}
};
const clearAllActiveThumbnails = () => {
	for (let z = 0; z < thumbnailPhotoBox.length; z++) {
		if (thumbnailPhotoBox[z].classList.contains('active')) {
			thumbnailPhotoBox[z].classList.remove('active');
		}
	}
};
const changeMainPhoto = () => {
	thumbnailPhotoBox.forEach((photo) => {
		photo.addEventListener('click', function () {
			previousThumbnailIndex = thumbnailIndex;
			previousPhotoIndex = photoIndex;
			let thumbnailPath = window
				.getComputedStyle(photo)
				.getPropertyValue('background-image');
			thumbnailPath = thumbnailPath.slice(thumbnailPath.indexOf('/img'));
			thumbnailPath = thumbnailPath.replace('")', '');
			thumbnailPath = '..' + thumbnailPath;
			photoIndex = pathCollection.indexOf(thumbnailPath);
			mainPhoto.style.backgroundImage =
				"url('" + `${pathCollection[photoIndex]}')`;
			setRightElementProperties();
			thumbnailIndex = photoIndex;
			clearAllActiveThumbnails();
			thumbnailPhotoBox[photoIndex].classList.add('active');
			if (photoIndex == 0) {
				smallLeftArrow.style.opacity = 0.4;
				smallLeftArrow.style.pointerEvents = 'none';
				smallRightArrow.style.opacity = 1;
				smallRightArrow.style.pointerEvents = 'auto';
				bigLeftArrow.style.opacity = 0.4;
				bigLeftArrow.style.pointerEvents = 'none';
				bigRightArrow.style.opacity = 1;
				bigRightArrow.style.pointerEvents = 'auto';
			} else if (photoIndex == pathCollection.length - 1) {
				smallRightArrow.style.opacity = 0.4;
				smallRightArrow.style.pointerEvents = 'none';
				smallLeftArrow.style.opacity = 1;
				smallLeftArrow.style.pointerEvents = 'auto';
				bigRightArrow.style.opacity = 0.4;
				bigRightArrow.style.pointerEvents = 'none';
				bigLeftArrow.style.opacity = 1;
				bigLeftArrow.style.pointerEvents = 'auto';
			} else {
				smallLeftArrow.style.opacity = 1;
				smallLeftArrow.style.pointerEvents = 'auto';
				bigLeftArrow.style.opacity = 1;
				bigLeftArrow.style.pointerEvents = 'auto';
				smallRightArrow.style.opacity = 1;
				smallRightArrow.style.pointerEvents = 'auto';
				bigRightArrow.style.opacity = 1;
				bigRightArrow.style.pointerEvents = 'auto';
			}
			if (previousThumbnailIndex > thumbnailIndex) {
				decreasingIndex =
					(previousThumbnailIndex - thumbnailIndex) * fullThumbnailSize;

				if (scrollValue - decreasingIndex >= 0) {
					scrollValue -=
						(previousThumbnailIndex - thumbnailIndex) * fullThumbnailSize;
					otherPhotosBox.scrollTo(0, scrollValue);
				}
			} else if (previousThumbnailIndex < thumbnailIndex) {
				increasingIndex =
					(thumbnailIndex - previousThumbnailIndex) * fullThumbnailSize;
				if (scrollValue + increasingIndex < otherPhotosBox.scrollHeight) {
					scrollValue +=
						(thumbnailIndex - previousThumbnailIndex) * fullThumbnailSize;
					otherPhotosBox.scrollTo(0, scrollValue);
				}
			}
		});
	});
};
const showNextPhoto = () => {
	if (photoIndex < pathCollection.length - 1) {
		thumbnailPhotoBox[photoIndex].classList.remove('active');
		previousPhotoIndex = photoIndex;
		previousThumbnailIndex = thumbnailIndex;
		clearAllActiveThumbnails();
		photoIndex++;
	}
	setRightElementProperties();
	thumbnailIndex = photoIndex;

	thumbnailPhotoBox[photoIndex].classList.add('active');
	mainPhoto.style.backgroundImage = "url('" + `${pathCollection[photoIndex]}')`;

	if (photoIndex == pathCollection.length - 1) {
		smallRightArrow.style.opacity = 0.4;
		smallRightArrow.style.pointerEvents = 'none';
		bigRightArrow.style.opacity = 0.4;
		bigRightArrow.style.pointerEvents = 'none';
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';

		increasingIndex = (photoIndex - previousThumbnailIndex) * fullThumbnailSize;

		if (
			previousThumbnailIndex < photoIndex &&
			scrollValue + increasingIndex < otherPhotosBox.scrollHeight
		) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
	} else {
		increasingIndex = (photoIndex - previousThumbnailIndex) * fullThumbnailSize;
		if (
			thumbnailIndex == photoIndex &&
			scrollValue + increasingIndex < otherPhotosBox.scrollHeight
		) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
		bigLeftArrow.style.opacity = 1;
		bigLeftArrow.style.pointerEvents = 'auto';
	}
};
const showPreviousPhoto = () => {
	if (photoIndex > 0) {
		thumbnailPhotoBox[photoIndex].classList.remove('active');
		previousPhotoIndex = photoIndex;
		previousThumbnailIndex = thumbnailIndex;
		clearAllActiveThumbnails();
		photoIndex--;
	}
	setRightElementProperties();
	thumbnailIndex = photoIndex;
	thumbnailPhotoBox[photoIndex].classList.add('active');
	mainPhoto.style.backgroundImage = "url('" + `${pathCollection[photoIndex]}')`;

	if (photoIndex == 0) {
		smallLeftArrow.style.opacity = 0.4;
		smallLeftArrow.style.pointerEvents = 'none';
		bigLeftArrow.style.opacity = 0.4;
		bigLeftArrow.style.pointerEvents = 'none';
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		decreasingIndex = (previousThumbnailIndex - photoIndex) * fullThumbnailSize;
		if (
			previousThumbnailIndex > photoIndex &&
			scrollValue - decreasingIndex >= 0
		) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
	} else {
		decreasingIndex = (previousThumbnailIndex - photoIndex) * fullThumbnailSize;
		if (thumbnailIndex == photoIndex && scrollValue - decreasingIndex >= 0) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		bigRightArrow.style.opacity = 1;
		bigRightArrow.style.pointerEvents = 'auto';
	}
};

const showNextThumbnail = () => {
	if (thumbnailIndex < pathCollection.length - 1) {
		thumbnailPhotoBox[thumbnailIndex].classList.remove('active');
		clearAllActiveThumbnails();
		setRightElementProperties();
		thumbnailIndex++;
	}
	thumbnailPhotoBox[thumbnailIndex].classList.add('active');
	if (thumbnailIndex == pathCollection.length - 1) {
		smallRightArrow.style.opacity = 0.4;
		smallRightArrow.style.pointerEvents = 'none';
		increasingIndex = fullThumbnailSize;
		if (scrollValue + increasingIndex < otherPhotosBox.scrollHeight) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
	} else {
		increasingIndex = fullThumbnailSize;
		if (scrollValue + increasingIndex < otherPhotosBox.scrollHeight) {
			scrollValue += increasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
	}
};
const showPreviousThumbnail = () => {
	if (thumbnailIndex > 0) {
		thumbnailPhotoBox[thumbnailIndex].classList.remove('active');
		clearAllActiveThumbnails();
		setRightElementProperties();
		thumbnailIndex--;
	}
	thumbnailPhotoBox[thumbnailIndex].classList.add('active');

	if (thumbnailIndex == 0) {
		smallLeftArrow.style.opacity = 0.4;
		smallLeftArrow.style.pointerEvents = 'none';
		decreasingIndex = fullThumbnailSize;
		if (scrollValue - decreasingIndex >= 0) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
	} else {
		decreasingIndex = fullThumbnailSize;
		if (scrollValue - decreasingIndex >= 0) {
			scrollValue -= decreasingIndex;
			otherPhotosBox.scrollTo(0, scrollValue);
		}
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
	}
};
const checkSwipeDirection = () => {
	if (
		touchstart > touchend &&
		Math.abs(touchstart - touchend) > 100 &&
		window.innerWidth < 1200
	) {
		showNextPhoto();
	} else if (
		touchstart < touchend &&
		Math.abs(touchend - touchstart) > 100 &&
		window.innerWidth < 1200
	) {
		showPreviousPhoto();
	}
};
const checkSwipeDirectionThumbnails = () => {
	if (
		touchstart > touchend &&
		Math.abs(touchstart - touchend) > 100 &&
		window.innerWidth < 1200
	) {
		showNextThumbnail();
	} else if (
		touchstart < touchend &&
		Math.abs(touchend - touchstart) > 100 &&
		window.innerWidth < 1200
	) {
		showPreviousThumbnail();
	}
};
changeMainPhoto();
document.addEventListener('DOMContentLoaded', collectAllPathsInfo);
document.addEventListener('DOMContentLoaded', setRightElementProperties);
document.addEventListener('resize', setRightElementProperties);
bigRightArrow.addEventListener('click', showNextPhoto);
mainPhoto.addEventListener('swipe', showNextPhoto);
bigLeftArrow.addEventListener('click', showPreviousPhoto);
smallLeftArrow.addEventListener('click', showPreviousThumbnail);
smallRightArrow.addEventListener('click', showNextThumbnail);
mainPhoto.addEventListener('touchstart', (e) => {
	touchstart = e.changedTouches[0].screenX;
});
mainPhoto.addEventListener('touchend', (e) => {
	touchend = e.changedTouches[0].screenX;
	checkSwipeDirection();
});
otherPhotosBox.addEventListener('touchstart', (e) => {
	touchstart = e.changedTouches[0].screenX;
});
otherPhotosBox.addEventListener('touchend', (e) => {
	touchend = e.changedTouches[0].screenX;
	checkSwipeDirectionThumbnails();
});

// Zajączek odpierdolił
// credits: kacper zając
