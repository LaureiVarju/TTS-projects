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

// $(document).ready(function() {
//   chunkTest();
// });

// function chunkTest() {
//   console.log("Chunk test");
//   var newArr = _.chunk(arr, 3);
//   console.log(newArr);

//   _.forEach(newArr, function(value) {
//     console.log(value);
//   });
// }

// let arr20 = _.range([(start = 1)], 21, [(step = 1)]);
// console.log(arr20);

// let arr50 = _.range([(start = 50)], 101, [(step = 1)]);

// var out50chunk = _.chunk(arr50, 5);
// console.log(out50chunk);

// // This will display evens
// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });

// console.log(array);
// // => [1, 3]

// console.log(evens);
// // => [2, 4]

// let arr100evens = _.range([(start = 2)], 101, [(step = 2)]);
// console.log(arr100evens);

// let arr100eodds = _.range([(start = 1)], 101, [(step = 2)]);
// console.log(arr100eodds);

// let mult20 = _.range([(start = 20)], 501, [(step = 20)]);
// console.log(mult20);

_.filter(arrObj, function(o) {
  return !o.CO;
});
