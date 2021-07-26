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
