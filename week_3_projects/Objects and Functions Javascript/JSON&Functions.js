// 
console.log("Top of js");

//Value types


var x = 1;
var y = 1;
x === y; //true

var y = x; // x == 1, y == 1
x === y; // true

x = 2; // x == 2, y == 1
x === y; // false

//Reference types
var x = { name: "Evan" };
var y = { name: "Evan" };
x === y; //false <-- why? Because these haven't been made equivalent yet below?

var y = x; //x and y are now {name: 'Evan'}
x === y; //true

x.name = "Noah"; //now that x.name has been redefined, y.name will take that on now too because they were made equal earlier
y.name; // 'Noah'

//Define a function
function saySomething(something) {
  console.log(something);
}

function add(number1, number2) {
  return number1 + number2; //don't forget the return
}

var sum = add(1, 2);
console.log(sum); // 3

//All functions take any number of arguments, regardless of their declared signature
function add(a, b) {
  console.log(a, b);
}
add(1); // '1,undefined'
add(1, 2, 3, 4, 5); // '1,2'

//The arguments list simply creates variables that reference the arguments in order they were passed.
// For functions that take an unknown number of arguments, use the arguments object
function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

add(1, 2, 3, 4, 5, 6, 7, 8);


// Calculating gratuity is a repetitive task, so let's create a couple of functions that do the work for us.

// create a variable titled billAmount and store a random number (ie: 100) Y
// create a function titled gratuity() Y
// gratutity should:
// multiply the value of billAmount by 20% Y
// hint: use 0.2
// return the value Y
// create a function titled totalWithGrat() Y

// totalWithGrat should:
// take in the amount as an argument 
// call the gratutity function
// add that to the original bill amount
// return the total bill + gratuity

// log the total (with gratuity) to the console

// append new total to the following phrase:
// "your total including gratuity is:"
// Limitation: You can only invoke the totalWithGrat function when logging the result



var billAmount = 100;
function gratuity() {
  return billAmount * 0.2;
}

function totalWithGrat() {
  return gratuity() + billAmount;
}

console.log(totalWithGrat());

console.log("your total including gratuity is: " + totalWithGrat());


//more notes
//Like other objects, functions can be assigned to variables.
//The difference between declaring a function that way (Function assignment) and the function add(){}
//syntax we've been using (Function Declaration) is that the latter hoists both the declaration and definition.
// ie

var add = function(a, b) {
  return a + b;
};

//hoisted(); // logs "foo"

function hoisted() {
  // Function Declaration
  console.log("foo");
}

//Function Assignment
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
  console.log("bar");
};

//Anonymous Functions..no name.

  add: function(a, b) {
    return a + b;
  }
};

calculator.add(2, 3); // 5

/////////

var arrayOfMystery = [
	['anonymous','array'],
	{ name: 'anonymous object' },
	function(){ return 'Anonymous Function!'}
]

console.log(arrayOfMystery[0][1]) // array
console.log(arrayOfMystery[1].name) // anonymous object
console.log(arrayOfMystery[2]()) // anonymous function!

/* 
[ ] creates an array in memory
{ } creates an object in memory
function(){ } creates an object in memory */

/---Exercise 2 --/

/*

Create a single object named slideshow that represents the data and functionality of a picture slideshow.
 There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

An array called photoList that contains the names of the photos as strings

An integer currentPhotoIndex that represents which photo in the photoList is currently displayed

A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and:

logs the current photo name.
Otherwise, log "End of slideshow";
A prevPhoto() function that does the same thing, but backwards.
A function getCurrentPhoto() that returns the current photo from the list.
*/

// var slideshow = {
//   var photoList=["photo_one","photo_two", "photo_three"];
  
//   nextPhoto(){
//     currentPhotoIndex = i;
//     i = 0;
//    if i < photoList.length {

   
//    console.log(photoList[i]);

//    i++;

//    else
//    console.log("End of Slide Show");
//   }

    //moves currentphotoindex to the next index (if there is one)
    //logs the current photo name

    //otherwise print send of slide show

  
  }
  
  /*
  prevPhoto(){

    currentPhotoIndex = i; // 5
    let i = photoList.length;

   if i <= photoList.length {

   
   console.log(photoList[i]);

   i--;

   else
   console.log("End of Slide Show");
  }

      //same but backwards
  }

  getCurrentPhoto(){
    console.log(photoList[]);
 //returns the current photo from the list
  }
}
*/
/*
function sayName() {
	console.log(this.name);
}

var teacher1 = {
	name: 'Assaf',
	speak: sayName
}

var teacher2 = {
	name: 'Shane',
	speak: sayName
}

teacher1.speak(); // 'Assaf'
teacher2.speak(); // 'Shane'

*/



