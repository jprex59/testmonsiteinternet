document.addEventListener("DOMContentLoaded", () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});

/**************Faire changer le nom du menu en fonction de la section********/

// recuperer les elements
let SectionName = document.getElementById("SectionName");
let contact = document.getElementById("contact");
let informations = document.getElementById("informations");
let presentationContainer = document.querySelector(".presentation-container");

/*****/
let sectionNameTop = SectionName.offsetTop;
let informationsTop = informations.offsetTop;
let contactTop = contact.offsetTop;

// faire la fonction
/*****Plus tard mettre dans un tableau*****/
function Section() {
	console.log(window.pageYOffset);
	if (window.pageYOffset < informationsTop) {
		SectionName.innerHTML = "Mon Portfolio";
	}
	if (window.pageYOffset > informationsTop) {
		SectionName.innerHTML = "A Propos";
	}
	if (window.pageYOffset > contactTop) {
		SectionName.innerHTML = "Contact";
	}
}
window.onscroll = function () {
	Section();
};
