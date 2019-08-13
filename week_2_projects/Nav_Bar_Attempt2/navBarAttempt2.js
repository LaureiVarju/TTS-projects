console.log("JS Linked");
//Add padding to navbar if the document is too small
window.onresize = function() {
  addmarg();
};
window.onload = function() {
  addmarg();
};

function addmarg() {
  //Get the elements
  navbar = document.getElementById("navbar");
  content = document.getElementById("content");
  //If window is bigger than navbar
  if (window.innerWidth > navbar.clientWidth) {
    navbar.style.height = "60px";

    //Adjust content margin so it doesnt get hidden/create gaps
    content.style.marginTop = "60px";
  } else {
    //If navbar bigger than window
    navbar.style.height = "67px";

    content.style.marginTop = "67px";
  }
}
