console.log("Top of js");
// Beginning of TTS Exercise 2

//1.Create an array to represent your shopping list with the following items:
// 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.

var groceryList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
console.log("this is the list: " + groceryList);

//2. Add 'fruit loops' to the list.
groceryList.push("fruit loops");
console.log("this is the list: " + groceryList);

//3. Update 'coffee' to 'fair trade coffee
groceryList[4] = "fair trade coffee";
console.log("this is the list: " + groceryList);

//4.Replace 'chips' and 'salsa' with 'rice' and 'beans'
groceryList.splice(2, 2, "beans", "rice");
console.log("this is the list: " + groceryList);

// 5. Create an empty array to represent your shopping cart.
var shoppingCart = [];

//6. Remove the last item from your shopping list and add it to your cart
groceryList.pop();
console.log("this is the list: " + groceryList);
shoppingCart.push("fruit loops");
console.log("this is the cart: " + shoppingCart);

//7. Remove the first item from your shopping list and add it to the cart
groceryList.shift();
console.log("this is the list now: " + groceryList);

shoppingCart.push("pop tarts");
console.log("this is the cart: " + shoppingCart);

/* 8. Write a 'while' loop that takes items from your shopping list and
// moves them to your cart until there are no items left on the list.

for (var i = 0; i < groceryList.length; i--) {
  console.log(groceryList[i]);
}
I am struggling with this one*/

// 9. Sort the items in your cart alphabetically... backward
shoppingCart.sort();
shoppingCart.reverse();
console.log("this is the cart: " + shoppingCart);

//10. Print the list of items in your shopping cart to the console as comma separated string.
var a = shoppingCart.toString();
var b = shoppingCart.join(", ");

console.log(a, b);

/*-------------

8. Write a 'while' loop that takes items from your shopping list and  moves them 
to your cart until there are no items left on the list.

for(var i = 0; i <groceryList.length; i--){
    console.log(groceryList[i]);
}

var teachers = ["Matthew", "David", "James"]; //What is this supposed to be doing?
for (var i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}

//Uses a function, more on that next class
teachers.forEach(function(item, index) {
  console.log(item, index);
});


--------*/
