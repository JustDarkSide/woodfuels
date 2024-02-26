const mainPhoto = document.querySelector('.photo img');
const otherPhotosBox = document.querySelector('.thumbnails-box');
const otherPhotos = document.querySelectorAll('.thumbnails-box img');
const mainPhotoPath = mainPhoto.getAttribute('src');
const bigLeftArrow = document.querySelector('.arrow-left');
const bigRightArrow = document.querySelector('.arrow-right');
const smallLeftArrow = document.querySelector('.small-arrow-left');
const smallRightArrow = document.querySelector('.small-arrow-right');
let photoIndex = 0;
let thumbnailIndex = 0;
let pathCollection = [];
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
const changeMainPhoto = () => {
	otherPhotos.forEach((photo) => {
		photo.addEventListener('click', function () {
			let thumbnailPath = photo.getAttribute('src');
			thumbnailPath = thumbnailPath.replace('thumbnails/', '');
			thumbnailPath = thumbnailPath.replace('-thumbnail', '');
			let previousPhotoIndex = photoIndex;
			photoIndex = pathCollection.indexOf(thumbnailPath);
			console.log(photoIndex);
			mainPhoto.setAttribute('src', thumbnailPath);
			thumbnailIndex = photoIndex;
			for (let z = 0; z < otherPhotos.length; z++) {
				if (otherPhotos[z].classList.contains('active')) {
					otherPhotos[z].classList.remove('active');
				}
			}
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
			if (previousPhotoIndex > photoIndex) {
				otherPhotosBox.scrollLeft -= 128;
			} else if (previousPhotoIndex == photoIndex) {
				console.log('');
			} else {
				otherPhotosBox.scrollLeft += 128;
			}
			otherPhotos[photoIndex].classList.add('active');
		});
	});
};
const showNextPhoto = () => {
	if (photoIndex < pathCollection.length - 1) {
		otherPhotos[photoIndex].classList.remove('active');
		photoIndex++;
		for (let z = 0; z < otherPhotos.length; z++) {
			if (otherPhotos[z].classList.contains('active')) {
				otherPhotos[z].classList.remove('active');
			}
		}
		thumbnailIndex = photoIndex;
	}
	otherPhotos[photoIndex].classList.add('active');
	mainPhoto.setAttribute('src', pathCollection[photoIndex]);
	if (window.innerWidth < 768) {
		if (photoIndex == pathCollection.length - 1) {
			smallRightArrow.style.opacity = 0.4;
			smallRightArrow.style.pointerEvents = 'none';
			bigRightArrow.style.opacity = 0.4;
			bigRightArrow.style.pointerEvents = 'none';
			otherPhotosBox.scrollLeft += 100;
		} else {
			otherPhotosBox.scrollLeft += 100;
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
			otherPhotosBox.scrollLeft += 128;
		} else {
			otherPhotosBox.scrollLeft += 128;
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
		photoIndex--;
		for (let z = 0; z < otherPhotos.length; z++) {
			if (otherPhotos[z].classList.contains('active')) {
				otherPhotos[z].classList.remove('active');
			}
		}
		console.log(photoIndex);
	}
	thumbnailIndex = photoIndex;
	otherPhotos[photoIndex].classList.add('active');
	mainPhoto.setAttribute('src', pathCollection[photoIndex]);
	if (window.innerWidth < 768) {
		if (photoIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			bigLeftArrow.style.opacity = 0.4;
			bigLeftArrow.style.pointerEvents = 'none';
			otherPhotosBox.scrollLeft -= 100;
		} else {
			otherPhotosBox.scrollLeft -= 100;
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

			otherPhotosBox.scrollLeft -= 128;
		} else {
			otherPhotosBox.scrollLeft -= 128;
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
		for (let z = 0; z < otherPhotos.length; z++) {
			if (otherPhotos[z].classList.contains('active')) {
				otherPhotos[z].classList.remove('active');
			}
		}
		thumbnailIndex++;
	}

	otherPhotos[thumbnailIndex].classList.add('active');
	if (thumbnailIndex == pathCollection.length - 1) {
		smallRightArrow.style.opacity = 0.4;
		smallRightArrow.style.pointerEvents = 'none';
	} else if (window.innerWidth < 768) {
		otherPhotosBox.scrollLeft += 100;
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
	} else {
		otherPhotosBox.scrollLeft += 128;
		smallRightArrow.style.opacity = 1;
		smallRightArrow.style.pointerEvents = 'auto';
		smallLeftArrow.style.opacity = 1;
		smallLeftArrow.style.pointerEvents = 'auto';
	}
};
const showPreviousThumbnail = () => {
	if (thumbnailIndex > 0) {
		otherPhotos[thumbnailIndex].classList.remove('active');
		for (let z = 0; z < otherPhotos.length; z++) {
			if (otherPhotos[z].classList.contains('active')) {
				otherPhotos[z].classList.remove('active');
			}
		}
		thumbnailIndex--;
	}
	otherPhotos[thumbnailIndex].classList.add('active');
	if (window.innerWidth < 768) {
		if (thumbnailIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			otherPhotosBox.scrollLeft -= 100;
		} else {
			otherPhotosBox.scrollLeft -= 100;
			smallLeftArrow.style.opacity = 1;
			smallLeftArrow.style.pointerEvents = 'auto';
			smallRightArrow.style.opacity = 1;
			smallRightArrow.style.pointerEvents = 'auto';
		}
	} else {
		if (thumbnailIndex == 0) {
			smallLeftArrow.style.opacity = 0.4;
			smallLeftArrow.style.pointerEvents = 'none';
			otherPhotosBox.scrollLeft -= 128;
		} else {
			otherPhotosBox.scrollLeft -= 128;
			smallRightArrow.style.opacity = 1;
			smallRightArrow.style.pointerEvents = 'auto';
		}
	}
};

changeMainPhoto();
document.addEventListener('DOMContentLoaded', collectAllPathsInfo);
bigRightArrow.addEventListener('click', showNextPhoto);
bigLeftArrow.addEventListener('click', showPreviousPhoto);
smallLeftArrow.addEventListener('click', showPreviousThumbnail);
smallRightArrow.addEventListener('click', showNextThumbnail);
