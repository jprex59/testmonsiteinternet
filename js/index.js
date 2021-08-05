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
/******Greensock*************/
const medias = document.querySelectorAll(".medias");
const title = document.querySelector(".MainTitle");
const nav = document.querySelector("nav");
const information = document.querySelector(".information .subtitle");
const button = document.querySelector(".button-container");
window.addEventListener("load", () => {
	const TL = gsap.timeline({ paused: true });

	TL.from(nav, 1, { opacity: 0, y: -100, ease: "power2.out" })
		.from(title, 1, { opacity: 0, x: -100, ease: "power2.out" }, "-=0.3")
		.from(information, 1, { opacity: 0, x: -200, ease: "power2.out" }, "-=0.8")
		.from(button, 1, { opacity: 0, x: -200, ease: "power2.out" }, "-=0.5")
		.staggerFrom(medias, 1, { right: -200, ease: "power2.out" }, 0.5, "-=1");
	TL.play();
});
