/***************Récupère la date*****************/
var d = new Date();
var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

/*****************Récupère les dates des messages******/
var jour = document.querySelectorAll(".jour");
var moi = document.querySelectorAll(".moi");
var année = document.querySelectorAll(".année");
const badge = document.querySelector(".badge");

/*****************Compare les tableaux à la ième position pour vérifier les conditions***/
for (let i = 0; i < jour.length; i++) {
	console.log(i);
	/******Récupère le contenu de la balise html associé à la ième position*******/
	var innerjour = jour[i].innerText || jour[i].textContent;
	var innermoi = moi[i].innerText || moi[i].textContent;
	var innerannée = année[i].innerText || année[i].textContent;
	/******Calcule la différence associé à la ième position*******/
	var difjour = d.getDate() - innerjour;
	/*************Fixe le ième box***********/

	var color_box = document.querySelector(".box-color-" + (i + 1));

	if (innerannée < d.getFullYear()) {
		color_box.style.backgroundColor = "#d0d0d0";
	} else if (innermoi < d.getMonth() + 1) {
		color_box.style.backgroundColor = "#d0d0d0";
	} else if (difjour >= 1) {
		color_box.style.backgroundColor = "#d0d0d0";
	}
	/*ne communique pas avec les autres pages
	if ((innerannée == d.getFullYear()) & ((innermoi == d.getMonth() + 1) & (innerjour == d.getDate()))) {
		badge.style.display = "block";
	}*/
}

/*Faire avec les strings et si != color en gris*/
