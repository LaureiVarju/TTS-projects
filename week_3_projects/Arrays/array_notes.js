console.log("Top of js"); //This is to check if I linked my file correctly to the HTML :)

// ------------- Array commands! ---------------
// PUSH - add to end
// nameOfArray.push("New Item Tacked on the END of the Array");

// POP - remove from end
// nameOfArray.pop(); pops off the last item in the array

// UNSHIFT - add to beginning
// nameOfArray.unshift("New Item Added to the FRONT of the Array");

// SHIFT - remove from beginning
// nameOfArray.shift(); Takes off the first item in an array.

//   ie.
//   var snowboard1 = snowboards.shift(); //snowboard1 == 'Ride', snowboards = ['Burton', Arbor']
//   console.log(snowboards);

// ADD/REPLACE SPECIFIC SEQUENCE ITEM
// carolinaPanthers[4] = "Cam Newton";  <-- adds Cam Newton to position 5
// (remember arrays start at 0 not 1, so '4' is the fifth position) and replaces whatever item was already there.

// LOOK-UP ITEM/VALUE TO SEE SEQUENCE ORDER
// var a = [10, 11, 20];
// console.log(a.indexOf(11));
// //looking up returns 1 because 11 is at index sequence 1. 3 items mean the positions are 0, 1, and 2 respectively

// console.log(a.indexOf(5)); //if a value doesn't exist in the array, and you look for it, you'll get a return of -1

// SLICE - Display Part of an Array
// //Shows a slice of the array within given parameters
// var a = [1, 2, 3, 4];

// //Slice - doesn't mutate array, slice(start,end)

// a.slice(0, 2); //[1,2] Maybe it's showing everything between 0 and 2, but not showing 2? so 0 and 1?

// console.log(a.slice(0, 2)); // why is this not 1, 3?

// console.log(a);

// SPLICE - Remove Items, Replace in a Specific Section
// This one is really confusing. The first number is where you start, the second is the one you remove, and the
// quotations are what you're adding.

// //Splice - splice(start,amountToRemove,...items to add)

// a.splice(1, 2, "a", "b"); //a is [1,'a','b',4]

// console.log(a);

//Iterating over Arrays using for loop and forEach

var teachers = ["Matthew", "David", "James"]; //This is going to print out each item line by line
for (var i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}

// //Uses a function, more on that next class
// teachers.forEach(function(item, index) {
//   console.log(item, index);
// });

// // //Stringifying

// teachers = ["James", "David", "Michelle"];

// var a = teachers.toString();
// var b = teachers.join("&");

// console.log(a, b);

// //Sorting

// var a = [2, 1, 3, 3, 2, 5, 33];
// parseInt(a);
// a.sort(); //[1,2,3]

// a.reverse(); //[3,2,1]

// console.log(a.reverse());

// //Alternatively a.sort(mySortFunction);
// //This doesn't seem to work...
