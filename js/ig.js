const arrow = document.querySelectorAll(".fa-chevron-up");
const more = document.querySelectorAll(".more");
const cover = document.querySelectorAll(".cover");

var ouverture = [];

for (let i = 0; i < more.length; i++) {
	ouverture[[i, 1]] = 0;
	ouverture[[i, 2]] = 0;

	more[i].addEventListener("click", () => {
		ouverture[[i, 1]] = ouverture[[i, 1]] + 1;
		ouverture[[i, 2]] = ouverture[[i, 1]] % 2;

		if (ouverture[[i, 2]] == 1) {
			cover[i].classList.add("is-active");
			arrow[i].classList.add("arrow_is-active");
			more[i].classList.add("more-is-active");
		} else if (ouverture[[i, 2]] == 0) {
			cover[i].classList.remove("is-active");
			arrow[i].classList.remove("arrow_is-active");
			more[i].classList.remove("more-is-active");
		}
		console.log(ouverture);
	});
}
