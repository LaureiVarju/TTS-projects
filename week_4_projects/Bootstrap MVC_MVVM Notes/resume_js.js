/* chart.js chart examples */
console.log("Top of JS");
// chart colors
var colors = ["#007bff", "#28a745", "#333333", "#c3e6cb", "#dc3545", "#6c757d"];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 50,
  legend: {
    position: "bottom",
    padding: 5,
    labels: { pointStyle: "circle", usePointStyle: true }
  }
};

// donut 1
var chDonutData1 = {
  labels: ["HTML", "CSS", "Javascript"],

  datasets: [
    {
      backgroundColor: ["#ff5f90", "#ffcc00", "#00ddff"],
      borderWidth: 0,
      data: [25, 20, 55]
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
  labels: ["Java", "Python", "SQL"],
  datasets: [
    {
      backgroundColor: ["#5b0094", "#ff8400", "#0f9600"],
      borderWidth: 0,
      data: [85, 5, 10]
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
  labels: ["Angular", "React", "Other"],
  datasets: [
    {
      backgroundColor: colors.slice(0, 3),
      borderWidth: 0,
      data: [21, 45, 55, 33]
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
