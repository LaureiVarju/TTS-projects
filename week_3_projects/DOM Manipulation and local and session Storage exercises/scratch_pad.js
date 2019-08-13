console.log("JS file successfully linked to page");

/*---- defining the function -----*/
function greetOnLoad() {
  var name = prompt("Hi! What's your name?");
  var myelement = document.getElementById("greeting");
  greeting.innerHTML = "Hello " + name + ", it's nice to meet you!";
}

// here we're calling the function
greetOnLoad();

/*--- note examples */

//Get an element ById
var myElement = document.getElementById("myEl");

//Get a collection of elements by tag name
var paragraphs = document.getElementsByTagName("p");

//Get a collection of elements by class name
var activeEls = document.getElementsByClassName("active");

//Get elements by a CSS Selector
var matches = document.querySelectorAll("#header p.active");
