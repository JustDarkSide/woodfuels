const mainPhoto = document.querySelector('.photo');
const otherPhotosBox = document.querySelector('.thumbnails-box');
const otherPhotos = document.querySelectorAll('.thumbnails-box img');
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
const collectAllPathsInfo = () => {
	otherPhotos.forEach((photo) => {
		let photoPath = photo.getAttribute('src');
		photoPath = photoPath.replace('thumbnails/', '');
		photoPath = photoPath.replace('-thumbnail', '');
		pathCollection.push(photoPath);
		if (thumbnailIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
		}
		if (photoIndex == 0) {
			bigLeftArrow.style.opacity = 0.4;
			bigLeftArrow.style.pointerEvents = 'none';
		}
	});
};
const clearAllActiveThumbnails = () => {
	for (let z = 0; z < otherPhotos.length; z++) {
		if (otherPhotos[z].classList.contains('active')) {
			otherPhotos[z].classList.remove('active');
		}
	}
};
const changeMainPhoto = () => {
	otherPhotos.forEach((photo) => {
		photo.addEventListener('click', function () {
			let thumbnailPath = photo.getAttribute('src');
			thumbnailPath = thumbnailPath.replace('thumbnails/', '');
			thumbnailPath = thumbnailPath.replace('-thumbnail', '');
			previousPhotoIndex = photoIndex;
			previousThumbnailIndex = thumbnailIndex;
			photoIndex = pathCollection.indexOf(thumbnailPath);
			mainPhoto.style.backgroundImage =
				"url('" + `${pathCollection[photoIndex]}')`;
			thumbnailIndex = photoIndex;
			clearAllActiveThumbnails();
			if (photoIndex == 0) {
				smallLeftArrow.style.opacity = 0.4;
				smallLeftArrow.style.pointerEvents = 'none';
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
				decreasingIndex = (previousThumbnailIndex - thumbnailIndex) * 100;
				if (window.innerWidth < 1200) {
					if (scrollValue - decreasingIndex >= 0) {
						scrollValue -= (previousThumbnailIndex - thumbnailIndex) * 100;
						otherPhotosBox.scrollTo(scrollValue, 0);
					}
				} else {
					decreasingIndex = (previousThumbnailIndex - thumbnailIndex) * 128;
					if (scrollValue - decreasingIndex >= 0) {
						scrollValue -= (previousThumbnailIndex - thumbnailIndex) * 128;
						otherPhotosBox.scrollTo(scrollValue, 0);
					}
				}
			} else if (previousThumbnailIndex == thumbnailIndex) {
				console.log('');
			} else {
				if (window.innerWidth < 1200) {
					increasingIndex = (thumbnailIndex - previousThumbnailIndex) * 100;
					if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
						scrollValue += (thumbnailIndex - previousThumbnailIndex) * 100;
						otherPhotosBox.scrollTo(scrollValue, 0);
					}
				} else {
					increasingIndex = (thumbnailIndex - previousThumbnailIndex) * 128;
					if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
						scrollValue += (thumbnailIndex - previousThumbnailIndex) * 128;
						otherPhotosBox.scrollTo(scrollValue, 0);
					}
				}
			}
			otherPhotos[photoIndex].classList.add('active');
		});
	});
};
const showNextPhoto = () => {
	if (photoIndex < pathCollection.length - 1) {
		otherPhotos[photoIndex].classList.remove('active');
		previousPhotoIndex = photoIndex;
		previousThumbnailIndex = thumbnailIndex;
		photoIndex++;
		clearAllActiveThumbnails();
		thumbnailIndex = photoIndex;
	}
	otherPhotos[photoIndex].classList.add('active');
	mainPhoto.style.backgroundImage = "url('" + `${pathCollection[photoIndex]}')`;

	if (window.innerWidth < 768) {
		if (photoIndex == pathCollection.length - 1) {
			smallRightArrow.style.opacity = 0.4;
			smallRightArrow.style.pointerEvents = 'none';
			bigRightArrow.style.opacity = 0.4;
			bigRightArrow.style.pointerEvents = 'none';
			increasingIndex = 100;
			if (
				previousThumbnailIndex < photoIndex &&
				scrollValue + increasingIndex < otherPhotosBox.scrollWidth
			) {
				scrollValue += (photoIndex - previousThumbnailIndex) * 100;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
		} else {
			if (
				thumbnailIndex == photoIndex &&
				scrollValue + increasingIndex < otherPhotosBox.scrollWidth
			) {
				scrollValue += (photoIndex - previousThumbnailIndex) * 100;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			smallLeftArrow.style.opacity = 1;
			smallLeftArrow.style.pointerEvents = 'auto';
			bigLeftArrow.style.opacity = 1;
			bigLeftArrow.style.pointerEvents = 'auto';
		}
	} else {
		if (photoIndex == pathCollection.length - 1) {
			smallRightArrow.style.opacity = 0.4;
			smallRightArrow.style.pointerEvents = 'none';
			bigRightArrow.style.opacity = 0.4;
			bigRightArrow.style.pointerEvents = 'none';
			increasingIndex = 128;
			if (
				previousThumbnailIndex < photoIndex &&
				scrollValue + increasingIndex < otherPhotosBox.scrollWidth
			) {
				scrollValue += (photoIndex - previousThumbnailIndex) * 128;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
		} else {
			if (
				previousThumbnailIndex < photoIndex &&
				scrollValue + increasingIndex < otherPhotosBox.scrollWidth
			) {
				scrollValue += (photoIndex - previousThumbnailIndex) * 128;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			smallLeftArrow.style.opacity = 1;
			bigLeftArrow.style.opacity = 1;
			smallLeftArrow.style.pointerEvents = 'auto';
			bigLeftArrow.style.pointerEvents = 'auto';
		}
	}
};
const showPreviousPhoto = () => {
	if (photoIndex > 0) {
		otherPhotos[photoIndex].classList.remove('active');
		previousPhotoIndex = photoIndex;
		previousThumbnailIndex = thumbnailIndex;
		photoIndex--;
		clearAllActiveThumbnails();
	}
	thumbnailIndex = photoIndex;
	otherPhotos[photoIndex].classList.add('active');
	mainPhoto.style.backgroundImage = "url('" + `${pathCollection[photoIndex]}')`;
	if (window.innerWidth < 768) {
		if (photoIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			bigLeftArrow.style.opacity = 0.4;
			bigLeftArrow.style.pointerEvents = 'none';
			decreasingIndex = (previousThumbnailIndex - photoIndex) * 100;
			if (
				previousThumbnailIndex > photoIndex &&
				scrollValue - decreasingIndex >= 0
			) {
				scrollValue -= (previousThumbnailIndex - photoIndex) * 100;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
		} else {
			if (thumbnailIndex == photoIndex && scrollValue - decreasingIndex >= 0) {
				scrollValue -= (previousThumbnailIndex - photoIndex) * 100;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			smallRightArrow.style.opacity = 1;
			smallRightArrow.style.pointerEvents = 'auto';
			bigRightArrow.style.opacity = 1;
			bigRightArrow.style.pointerEvents = 'auto';
		}
	} else {
		if (photoIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			bigLeftArrow.style.opacity = 0.4;
			bigLeftArrow.style.pointerEvents = 'none';
			decreasingIndex = (previousThumbnailIndex - photoIndex) * 128;
			if (
				previousThumbnailIndex > photoIndex &&
				scrollValue - decreasingIndex >= 0
			) {
				scrollValue -= (previousThumbnailIndex - photoIndex) * 128;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			otherPhotosBox.scrollTo(scrollValue, 0);
		} else {
			if (thumbnailIndex == photoIndex && scrollValue - decreasingIndex >= 0) {
				scrollValue -= (previousThumbnailIndex - photoIndex) * 128;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			smallRightArrow.style.opacity = 1;
			smallRightArrow.style.pointerEvents = 'auto';
			bigRightArrow.style.opacity = 1;
			bigRightArrow.style.pointerEvents = 'auto';
		}
	}
};

const showNextThumbnail = () => {
	if (thumbnailIndex < pathCollection.length - 1) {
		otherPhotos[thumbnailIndex].classList.remove('active');
		clearAllActiveThumbnails();
		thumbnailIndex++;
	}

	otherPhotos[thumbnailIndex].classList.add('active');
	if (thumbnailIndex == pathCollection.length - 1) {
		smallRightArrow.style.opacity = 0.4;
		smallRightArrow.style.pointerEvents = 'none';
		increasingIndex = 100;
		if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
			scrollValue += 100;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
	} else if (window.innerWidth < 768) {
		if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
			scrollValue += 100;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
	} else {
		increasingIndex = 128;
		if (scrollValue + increasingIndex < otherPhotosBox.scrollWidth) {
			scrollValue += 128;
			otherPhotosBox.scrollTo(scrollValue, 0);
		}
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
	}
};
const showPreviousThumbnail = () => {
	if (thumbnailIndex > 0) {
		otherPhotos[thumbnailIndex].classList.remove('active');
		clearAllActiveThumbnails();
		thumbnailIndex--;
	}
	otherPhotos[thumbnailIndex].classList.add('active');
	if (window.innerWidth < 768) {
		if (thumbnailIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			decreasingIndex = 100;
			if (scrollValue - decreasingIndex >= 0) {
				scrollValue -= 100;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
		} else {
			if (scrollValue - decreasingIndex >= 0) {
				scrollValue -= 100;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			smallLeftArrow.style.opacity = 1;
			smallLeftArrow.style.pointerEvents = 'auto';
			smallRightArrow.style.opacity = 1;
			smallRightArrow.style.pointerEvents = 'auto';
		}
	} else {
		if (thumbnailIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			decreasingIndex = 128;
			if (scrollValue - decreasingIndex >= 0) {
				scrollValue -= 128;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
		} else {
			if (scrollValue - decreasingIndex >= 0) {
				scrollValue -= 128;
				otherPhotosBox.scrollTo(scrollValue, 0);
			}
			smallRightArrow.style.opacity = 1;
			smallRightArrow.style.pointerEvents = 'auto';
		}
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
