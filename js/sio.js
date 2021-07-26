function openModal(indexModal) {
	document.getElementById("Modal_" + indexModal).style.display = "flex";
}
function closeModal(indexModal) {
	document.getElementById("Modal_" + indexModal).style.display = "none";
}

/**************Faire changer le nom du menu en fonction de la section********/

// recuperer les elements
let SectionName = document.getElementById("SectionName");
let pythonLast = document.getElementById("company");

/*****/
let sectionNameTop = SectionName.offsetTop;
let pythonLastTop = pythonLast.offsetTop;

// faire la fonction
/*****Plus tard mettre dans un tableau*****/
function Section() {
	console.log(window.pageYOffset);
	if (window.pageYOffset < pythonLastTop) {
		SectionName.innerHTML = "BTS SIO";
	}
	if (window.pageYOffset > pythonLastTop) {
		SectionName.innerHTML = "STAGE DE SIO";
	}
}
window.onscroll = function () {
	Section();
};
