console.log("JS file successfully linked to page");

/* Editing Node Notes */

//Here is the fake HTML it's referring to:

<div>
  <a href="#">Click me</a>
</div>;

//Get all inputs
var div = document.querySelector("div");
var a = document.querySelector("a");

a.innerHTML; //"click me"
div.innerHTML; //'<a href="#">Click me</a>'

a.innerHTML = "Updated link text";

/*-------------------------*/

<a href="http://google.com" name="googleLink">
  Click me
</a>;
var a = document.getElementsByName("a");

//Get an attribute
a.href; //"http://google.com"

//Set an attribute
a.name = "new link name";

//Add a new attribute
a.target = "_blank";

//Remove the first list item
document.querySelector(".first").remove();

//adding nodes
var newLI = document.createElement("li");
newLI.innerHTML = "Item 2";

var list = document.querySelector("ul");
list.appendChild(newLI); //Insert after item 1

// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'

var div = document.querySelector("div");
var a = document.querySelector("a");

a.innerHTML; //"click me"
div.innerHTML; //'<a href="#">Click me</a>'

a.innerHTML = "Updated link text";

// 2. Remove 'Twinkies' from the list
document.querySelector("#list").remove("Twinkies");

// 3. Add an item 'Cheese Whiz'
newLI.innerHTML = "Cheese Whiz";

// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
document.querySelector("#list").remove();

// 5. Add the class 'important' to the muscle milk item.
document.querySelector('ul');
list.appendChild(newLI); //Insert after item 1

//One of the things I struggle with the most when looking at code is
// distinguising between user-made variables (even in examples) and predetermined keywords that are global or tied to an API or an existing library/framework
//Syntax coloring in your average IDE only goes so far for me....unless a variable is named something like puppyDorkSpecOps I feel compelled to cross reference it to be sure :P

// c


//


<header>
	<ul>
		<li class="first">Item 1</li>
		<li class="selected">Item 2</li>
		<li class="last">Item 3</li>
	</ul>
</header>
<section>
	Hello!
</section>

document.querySelector("#list").remove("Twinkies");

var newLI = document.createElement("li");
newLI.innerHTML = "Item 2";

var newLI = document.createElement('li');
newLI.innerHTML = "Item 2";

var list = document.querySelector('ul');
list.appendChild(newLI); //Insert after item 1