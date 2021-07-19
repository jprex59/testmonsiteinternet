bulmaCarousel.attach("#carousel-demo", {
	slidesToScroll: 1,
	slidesToShow: 4,
});

$(document).ready(function () {
	var typed = new Typed(".texte", {
		strings: [" avoir une bonne capacité physique", "être sérieux", "être régulier dans son travail", "et surtout, servir et protéger"],
		typeSpeed: 20,
		backSpeed: 30,
		loop: true,
	});
});
