console.log("top of JS");

var arr = [1, 4, 5, 12, 55, 24, 69, 13, 5, 8, 12];
var theObj = { id: 1, name: "Tom Henry", state: "KS" };
var arrObj = [
  { id: 6, name: "Will Turner", state: "KS" },
  { id: 7, name: "Dawn Williams", state: "NC" },
  { id: 8, name: "Sean Cunningham", state: "NC" },
  { id: 9, name: "Ted Hardy", state: "TX" },
  { id: 10, name: "Bruce Matthis", state: "FL" },
  { id: 11, name: "Billy Smith", state: "FL" },
  { id: 12, name: "Clara Jarvis", state: "TX" },
  { id: 13, name: "Cindy Fisher", state: "CO" },
  { id: 14, name: "Gino Donovan", state: "CO" },
  { id: 15, name: "Nancy Curtis", state: "NC" }
];

/* 4. Create arrays with the following elements:
-----------------------------------------------------------
//1-20: */

console.log("Create an Array of 1-20");

let arr20 = _.range([(start = 1)], 21, [(step = 1)]);
console.log(arr20);

console.log("************************");

console.log(
  "Create an Array of 50-100. This one is chunked to display in sets of 5"
);

let arr50 = _.range([(start = 50)], 101, [(step = 1)]);

var out50chunk = _.chunk(arr50, 5);
console.log(out50chunk);

console.log("************************");

console.log("Create an Array of 1-100, but only even numbers");

let arr100evens = _.range([(start = 2)], 101, [(step = 2)]);
console.log(arr100evens);

console.log("************************");

console.log("Create an Array of 1-100, but only odd numbers");

let arr100eodds = _.range([(start = 1)], 101, [(step = 2)]);
console.log(arr100eodds);

console.log("************************");

console.log("Create an Array of 1-500, but only mutiples of 20");

let mult20 = _.range([(start = 20)], 501, [(step = 20)]);
console.log(mult20);

console.log("************************");

console.log("Prints the number of residents in Colorado");

let ColPeople = _.filter(arrObj, { state: "CO" });
console.log(ColPeople);

console.log("************************");

console.log("Prints the number of residents in each state");
var residentsbystate = _.countBy(arrObj, "state");
console.log(residentsbystate);

console.log("************************");

console.log("Display all people who have a last name of 7 or more letters");

//I receieved some help with this one
let lastname7plus = _.filter(arrObj, function(obj) {
  return obj.name.split(" ")[1].length >= 7;
});
console.log(lastname7plus);

//More examples coming
