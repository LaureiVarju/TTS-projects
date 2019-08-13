//This is to check if I linked my file correctly to the HTML :)
console.log("JS File successfully linked");

var se;

//s is the array we're generating. We're declaring it here as a variable to refer to and call later

var fibonacci_series = function(n) {
  console.log("Test fibonacci series");
  if (n === 1) {
    return [0, 1];

    //This solution is iterative instead of recursive, because we're starting the array with pre-generated
    // values [0,1] to generate the rest of the sequence from
  } else {
    s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

document.getElementById("buttonA").addEventListener("click", outputFunction);

const elementMax = 5;
console.log(fibonacci_series(elementMax));

console.log(output);

function outputFunction() {
  console.log("test outputFunction");

  var theNumber = -1; // input to the Fibonacci function.
  const textFieldElementName = "inputValueA";
  var textFieldElement = document.getElementById(textFieldElementName);
  if (textFieldElement) {
    console.log('Got element with id: "' + textFieldElementName + '"');
    var textFieldText = parseInt(textFieldElement.value);
    theNumber = parseInt(textFieldText);
    console.log(
      "Text field value is: " +
        textFieldText +
        " typeof: " +
        typeof textFieldText
    );
  } else {
    console.log(
      'FAILED to get element with id: "' + textFieldElementName + '"'
    );
  }

  if (theNumber < elementMax) {
    output = "s[" + theNumber + "] = " + s[theNumber];
  }
  var para = document.getElementById("output");
  para.innerText = output;
}

// ^this spits the output to the HTML, in the <p> tag with the "output" id
