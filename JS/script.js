const mbNav = document.querySelector(".mobile-nav");
const bBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".mb-nav__item");
const header = document.querySelector(".header");
const headerImage = document.querySelector(".header__carousel-photo--photo1");
const navSpace = document.querySelector(".nav");
const offsetDiv = document.querySelector(".offset");
const logoImg = document.querySelector(".solo-logo-item-img");
let i = 1;

//-------------NAV--------------
const offsetTimeout = () => {
	setTimeout(() => {
		if (mbNav.classList.contains("mobile-nav--active")) {
			offsetDiv.classList.add("showShadow");
			offsetDiv.classList.remove("hideShadow");
		} else {
			offsetDiv.classList.remove("showShadow");
			offsetDiv.classList.add("hideShadow");
		}
	}, 50);
};

const handleNav = () => {
	mbNav.classList.toggle("mobile-nav--active");
	offsetTimeout();

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			mbNav.classList.remove("mobile-nav--active");
			offsetTimeout();
		});
	});
};

//-------------HEADER-----------------
const showAndHidePhotos = () => {
	headerImage.classList.toggle("show");
	headerImage.classList.toggle("hide");
	if (i == 3) {
		i = 0;
	}
	i++;
	setTimeout(() => {
		headerImage.style.backgroundImage =
			"url('" + `../img/carousel-item${i}-big.jpg')`;
	}, 1300);
	setTimeout(() => {
		headerImage.classList.toggle("show");
		headerImage.classList.toggle("hide");
	}, 1400);
	setTimeout(showAndHidePhotos, 5000);
};

const checkScreenWidth = () => {
	if (window.innerWidth >= 768) {
		header.style.height = "calc(100vh - 120px)";
	} else {
		header.style.height = "calc(100vh - 90px)";
	}

	if (window.innerWidth <= 400) {
		logoImg.setAttribute("src", "../img/logo-circle-pc-apr.png");
	}
};

setTimeout(showAndHidePhotos, 5000);

//--------------EVENTS----------------
document.addEventListener("DOMContentLoaded", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);
bBtn.addEventListener("click", handleNav);
navSpace.addEventListener("focusout", () => {
	//Kacperek zabłysnął
	mbNav.classList.remove("mobile-nav--active");
	offsetTimeout();
	//to zrobił dominik elegancko nie
});
