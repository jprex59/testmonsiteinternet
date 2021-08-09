/*******************************/
let Sites = document.getElementById("Sites");
let Extensions = document.getElementById("Extensions");

/*****container****/
let containerSites = document.querySelector(".containerSites");
let containerExtensions = document.querySelector(".containerExtensions");

Extensions.addEventListener("click", () => {
	Extensions.classList.add("is-active");
	Sites.classList.remove("is-active");
});

Sites.addEventListener("click", () => {
	Sites.classList.add("is-active");
	Extensions.classList.remove("is-active");
});
