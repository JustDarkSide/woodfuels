const mainPhoto = document.querySelector('.photo img');
const otherPhotosBox = document.querySelector('.thumbnails-box');
const otherPhotos = document.querySelectorAll('.thumbnails-box img');
const mainPhotoPath = mainPhoto.getAttribute('src');
const bigLeftArrow = document.querySelector('.arrow-left');
const bigRightArrow = document.querySelector('.arrow-right');
const smallLeftArrow = document.querySelector('.small-arrow-left');
const smallRightArrow = document.querySelector('.small-arrow-right');
let photoIndex = 0;
let pathCollection = [];
const collectAllPathsInfo = () => {
	otherPhotos.forEach((photo) => {
		let photoPath = photo.getAttribute('src');
		photoPath = photoPath.replace('thumbnails/', '');
		photoPath = photoPath.replace('-thumbnail', '');
		pathCollection.push(photoPath);
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
			for (let z = 0; z < otherPhotos.length; z++) {
				if (otherPhotos[z].classList.contains('active')) {
					otherPhotos[z].classList.remove('active');
				}
			}
			if (previousPhotoIndex > photoIndex) {
				otherPhotosBox.scrollLeft -= 128;
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
		console.log(photoIndex);
	}
	otherPhotos[photoIndex].classList.add('active');
	mainPhoto.setAttribute('src', pathCollection[photoIndex]);
	otherPhotosBox.scrollLeft += 128;
};
const showPreviousPhoto = () => {
	if (photoIndex > 0) {
		otherPhotos[photoIndex].classList.remove('active');
		photoIndex--;
		console.log(photoIndex);
	}
	otherPhotos[photoIndex].classList.add('active');
	mainPhoto.setAttribute('src', pathCollection[photoIndex]);
	otherPhotosBox.scrollLeft -= 128;
};

const showNextThumbnail = () => {
	if (photoIndex < pathCollection.length - 1) {
		otherPhotos[photoIndex].classList.remove('active');
		photoIndex++;
		console.log(photoIndex);
	}
	otherPhotos[photoIndex].classList.add('active');
	otherPhotosBox.scrollLeft += 128;
};
const showPreviousThumbnail = () => {
	if (photoIndex > 0) {
		otherPhotos[photoIndex].classList.remove('active');
		photoIndex--;
		console.log(photoIndex);
	}
	otherPhotos[photoIndex].classList.add('active');
	otherPhotosBox.scrollLeft -= 128;
};

changeMainPhoto();
document.addEventListener('DOMContentLoaded', collectAllPathsInfo);
bigRightArrow.addEventListener('click', showNextPhoto);
bigLeftArrow.addEventListener('click', showPreviousPhoto);
smallLeftArrow.addEventListener('click', showPreviousThumbnail);
smallRightArrow.addEventListener('click', showNextThumbnail);
