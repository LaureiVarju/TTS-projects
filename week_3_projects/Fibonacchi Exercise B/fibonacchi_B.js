console.log("Top of js"); //This makes sure we linked this file to our HTML correctly

var numCompare = prompt(
  "Write the number you want to verify as a Fibonacci number."
);

numCompare = parseInt(numCompare);

// This ^ makes sure that the input value is being interpreted as a number for later calculations

var s;

// 's' is the array we're generating. We're declaring it here as a variable to refer to and call later

var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1];

    //This solution is iterative instead of recursive, because we're starting the array with pre-generated
    //values [0,1] to generate the rest of the sequence from
  } else {
    s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(30));

/*----This section compares the input value with the closest number in the sequence ---- */

smallestDiff = Math.abs(numCompare - s[0]);
closest = 0; //index of the current closest number

for (i = 1; i < s.length; i++) {
  currentDiff = Math.abs(numCompare - s[i]);
  if (currentDiff < smallestDiff) {
    smallestDiff = currentDiff;
    closest = i;
  }
}

if (numCompare == s[closest]) {
  console.log(numCompare + " is a Fibonacci number!");
} else {
  console.log(
    "The closest Fibonacchi number to " + numCompare + " is " + s[closest]
  );
}
