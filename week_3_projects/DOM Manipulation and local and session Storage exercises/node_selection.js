console.log("JS file successfully linked to page");

/*
Get the header element (Y) make it Orange 
Get all the section elements (Y) make them Blue 
Get the section element with class="current" (Y) Make them red
Get the section that comes after the current section make them green
Get the h2 node from the section before the 'current' section make it purple 
Get the div that contains the section that has a h2 with a class of 'highlight' make it yellow
Get all the sections that contain a H2 (using a single statement); make them pink 
*/

//Get a single node
// var el = document.getElementById("username");

// inputs.length; //2
// inError.length; //

//1. Get the header element
var direction1 = document.getElementsByTagName("header");

var directionmore = direction1.length;
if (directionmore === 1) {
  var direction1 = direction1[0];
  direction1.style.color = "red"; //this just confirmed I selected the correct things by making them red.
}

//2. Get all the section elements
var direction2 = document.getElementsByTagName("section");

//3. Get the section element with class="current"1
var direction3 = document.getElementsByClassName("current1");

//4. Get the section that comes after the current section
//<section class="current"> + 1?
//var direction4 = selectedItem.nextElementSibling;

//5. Get the h2 node from the section before the 'current' section

//6. Get the div that contains the section that has a h2 with a class of 'highlight'

//7. Get all the sections that contain a H2 (using a single statement);

var selectedItem = document.querySelector("li.selected");
var first = selectedItem.previousElementSibling;
var last = selectedItem.nextElementSibling;
var list = selectedItem.parentElement;
var header = selectedItem.parentElement.parentElement;
var section = selectedItem.parentElement.parentElement.nextElementSibling;

// 2?
var sectionElements = document.getElementsByTagName("section");
var sectionElementsLen = sectionElements.length;
if (sectionElementsLen > 0) {
  var sectionElement = sectionElements[0];

  currentColor = sectionElement.style.color;
  sectionElement.style.color = "blue";
  sectionElement.style.color = "currentColor";
} else alert("No <section> element found.");

//3 ?

var sectionElements = document.querySelectorAll("section.current");
var sectionElementsLen = sectionElements.length;
if (sectionElementsLen > 0) {
  var sectionElement = sectionElements[0];

  currentColor = sectionElement.style.color;
  sectionElement.style.color = "green"; // this is also hitting the salmon element
} else alert("No <section> with class='current'> element found.");

// number 3?
var sectionElement = document.querySelector("section.current");
if (sectionElement) {
  currentColor = sectionElement.style.color;
  sectionElement.style.color = "salmon";
  sectionElement.style.color - "currentColor";
} else alert("No <section> with class='current'> element found.");
