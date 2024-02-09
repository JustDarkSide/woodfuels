const mbNav = document.querySelector(".mobile-nav");
const bBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".mb-nav__item");

const handleNav = () => {
	mbNav.classList.toggle("mobile-nav--active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			mbNav.classList.remove("mobile-nav--active");
		});
	});
};

bBtn.addEventListener("click", handleNav);
