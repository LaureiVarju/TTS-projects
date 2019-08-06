console.log("Top of js"); //This is to check if I linked my file correctly to the HTML :) 

var orderSequence = prompt(
  "Write the sequence number of the fibonacchi value you would like to view."
);

orderSequence = parseInt(orderSequence);

// This ^ makes sure that the input value is being interpreted as a number for later calculations

var s;

//s is the array we're generating. We're declaring it here as a variable to refer to and call later

var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1];

    //This solution is iterative instead of recursive, because we're starting the array with pre-generated values [0,1] to generate the rest of the sequence from
  } else {
    s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));

var output = s[orderSequence - 1];

console.log(output);
