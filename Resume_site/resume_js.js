/* chart.js chart examples */
console.log("Top of JS");

// chart colors
var colors = ["#007bff", "#28a745", "#333333", "#c3e6cb", "#dc3545", "#6c757d"];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 62,
  legend: {
    position: "bottom",
    padding: 5,
    labels: { pointStyle: "circle", usePointStyle: true }
  }
};

// donut 1
var chDonutData1 = {
  labels: ["HTML", "CSS", "Javascript", "Photoshop", "Illustrator"],

  datasets: [
    {
      backgroundColor: ["#ff5f90", "#ffcc00", "#34eb77", "#00ddff", "#d445ff"],
      borderWidth: 0,
      data: [15, 8, 30, 40, 7]
    }
  ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
    type: "pie",
    data: chDonutData1,
    options: donutOptions
  });
}

// donut 2
var chDonutData2 = {
  labels: ["Java", "Python", "SQL", "node", "PHP"],
  datasets: [
    {
      backgroundColor: ["#5b0094", "#4059ff", "#0f9600", "#c90f02", "#ff8400"],
      borderWidth: 0,
      data: [70, 11, 19, 6, 4]
    }
  ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
  new Chart(chDonut2, {
    type: "pie",
    data: chDonutData2,
    options: donutOptions
  });
}

// donut 3
var chDonutData3 = {
  labels: ["Angular", "Bootstrap", "JQuery", "Popper"],
  datasets: [
    {
      backgroundColor: colors.slice(0, 4),
      borderWidth: 0,
      data: [41, 45, 55, 13]
    }
  ]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
  new Chart(chDonut3, {
    type: "pie",
    data: chDonutData3,
    options: donutOptions
  });
}
