const mbNav = document.querySelector(".mobile-nav");
const bBtn = document.querySelector(".burger-btn");

const handleNav = () => {
	mbNav.classList.toggle("mobile-nav--active");
};

bBtn.addEventListener("click", handleNav);
