
$(document).ready(function(){
  $('.header').height($(window).height());
});



function myFunction() {
  var x = document.getElementById("burton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


/*
$("#burton button").on("click", myfunction() {
  $("button").hide(); 

};
/*
$("#burton button").on("click", function(){


$("#burton").hide();

});

/*
function myFunction() {
  document.getElementById("burton").style.display = "none";
}

*/

