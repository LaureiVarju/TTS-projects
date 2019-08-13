// Fibonacci Exercise A. Code and commentary by Michelle Dilzell
// Created and revised weeks 2-3 of TTS Hartford bootcamp, Summer 2019

//This file is heavily annotated to show my learning progression
//and thought process for others, and to function as a reference for myself.

/*---------------------------------------------*/

console.log("JS file successfully linked");
/*Confirms the JS file was linked/loaded correctly. This is a current habit of
mine to include in any JS file before I go deep trying to 'fix' something that's not even loaded :) */

/*---------------------------------------------*/

var orderSequence = prompt(
  "Write the sequence number of the fibonacchi value you would like to view."
);

/* I ran into a problem here when creating the GUI version of this exercise.
Since the user's input is the first thing we get when the page loads, that 
variable is ready for reference right away. In the GUI version, this occurs 
in a form submission, and so the input we need is generated later, and that 
affects some of the order of the code */

orderSequence = parseInt(orderSequence);
//  ^ makes sure that the input value is being interpreted as a number for later calculations

var generatedArray;
// "generatedArray" is the array we'll be generating. We're declaring it here as a variable to further define and call later on

var fibonacciSequence = function(n) {
  if (n === 1) {
    // "=" means you're setting a value for something, === means we're checking for both equality and equivalent data types
    return [0, 1];

    // This solution is iterative instead of recursive, because we're starting the array with pre-generated values [0,1] to
    // generate the rest of the sequence from.
  } else {
    generatedArray = fibonacciSequence(n - 1);
    generatedArray.push(
      generatedArray[generatedArray.length - 1] +
        generatedArray[generatedArray.length - 2]
    );
    return generatedArray;
  }
};

console.log(fibonacciSequence(99));
// This generates only the first 100 numbers of the sequence, otherwise, it runs forever and crashes :)
// the downside is, any input past 100 will return as undefined.

var output = generatedArray[orderSequence - 1];

console.log(output);
