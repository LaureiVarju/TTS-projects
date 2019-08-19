console.log("top of JS");

var arr = [1, 4, 5, 12, 55, 24, 69, 13, 5, 8, 12];
var theObj = { id: 1, name: "Tom Henry", state: "KS" };
var arrObj = [
  { id: 1, name: "Tom Henry", state: "TX" },
  { id: 2, name: "Sally Newman", state: "FL" },
  { id: 3, name: "Ryan Busch", state: "CO" },
  { id: 4, name: "Brenda Miller", state: "KS" },
  { id: 5, name: "Ed Cage", state: "NC" }
];

$(document).ready(function() {
  chunkTest();
});

function chunkTest() {
  console.log("Chunk test");
  var newArr = _.chunk(arr, 3);
  console.log(newArr);
  _.forEach(newArr, function(value) {
    console.log(value);
  });
}
