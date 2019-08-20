console.log("top of JS");

$(".btn").click(function() {
  $(".btn")
    .removeClass("btn-success")
    .addClass("btn-danger ");
  $(this)
    .addClass("btn-success")
    .removeClass("btn-danger ");
});
