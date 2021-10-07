var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
	type: "polarArea",
	data: {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "# of Votes",
				data: [1200, 1900, 300],
				backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.5)"],
			},
		],
	},
	options: {
		responsive: true,
	},
});

var ctx2 = document.getElementById("myChart2").getContext("2d");
var myChart2 = new Chart(ctx2, {
	type: "bar",
	data: {
		labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mais", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"],
		datasets: [
			{
				label: "# of Votes",
				data: [1200, 1250, 300, 500, 400, 600, 700, 800, 900, 700, 100, 2000],
				backgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 0.5),rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 0.5),rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 0.5),rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 3)",
				],
			},
		],
	},
	options: {
		responsive: true,
	},
});
