console.log("Top of js");
// Beginning of TTS Javascript Exercise Day 12

//1.Create an array to represent your shopping list with the following items:
// 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.

var groceryList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
console.log("this is the list: " + groceryList);

//2. Add 'fruit loops' to the list.
groceryList.push("fruit loops");
console.log("this is the list after we pushed fruit loops: " + groceryList);

//3. Update 'coffee' to 'fair trade coffee
groceryList[4] = "fair trade coffee";
console.log("this is the list after updating coffee: " + groceryList);

//4.Replace 'chips' and 'salsa' with 'rice' and 'beans'
groceryList.splice(2, 2, "beans", "rice");
console.log("this is the list after splicing: " + groceryList);

// 5. Create an empty array to represent your shopping cart.
var shoppingCart = [];

//6. Remove the last item from your shopping list and add it to your cart
groceryList.pop();
console.log("this is the list after a pop: " + groceryList);
shoppingCart.push("fruit loops");
console.log("this is the cart after a push: " + shoppingCart);

//7. Remove the first item from your shopping list and add it to the cart
groceryList.shift();
console.log("this is the list after a shift: " + groceryList);

shoppingCart.push("pop tarts");
console.log("this is the cart after a push: " + shoppingCart);
console.log("this is the list prior to the loop: " + groceryList);

// 8. Write a 'while' loop that takes items from your shopping list and
// moves them to your cart until there are no items left on the list.

let counter = 0; //we're setting up the conditions for the while loop here with a counter
let listLength = groceryList.length;
/* ^^^ we're checking and setting the length of the array here and taking a snapshot of it
before it goes into the loop and starts to change. This means it will run the appropriate number of times
with a set number before the loop starts. I think it's '4' at this point in time? */

while (counter < listLength) {
  //while the counter is less than the list length, run these conditions
  let listItem = groceryList.pop();
  //making sure that whatever gets popped off doesn't get 'lost' it becomes the variable listItem, so we
  //can catch it and push it onto the cart array

  shoppingCart.push(listItem);
  // shoppingCart.push(groceryList.pop()); <--a cleaner way of doing the above 2 lines where you don't need the var listitem

  counter++; //now that we've run the line of code once, add 1 to the counter. We'll keep looping until
  //the counter is no longer less than the list length. This will eventually make our exit condition true
}
console.log("this is the cart after the loop: " + shoppingCart);

// 9. Sort the items in your cart alphabetically... backward
shoppingCart.sort();
shoppingCart.reverse();
console.log(
  "this is the cart after bein sorted alphabetically in reverse: " +
    shoppingCart
);

//10. Print the list of items in your shopping cart to the console as comma separated string.
var a = shoppingCart.toString();
var b = shoppingCart.join(", ");

console.log("this is our cart joined as a string: " + a, b);
