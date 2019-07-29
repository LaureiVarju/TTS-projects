counter = 0;

$('#circle').click(function () {
    var filenames = ['Homer_Simpson_2006.png', 'Bart_Simpson_200px.png'];
    var index = counter % 2;
    $('img').attr('src', filenames[index]);
    counter += 1;  // counter = counter + 1
    console.log("counter = " + counter + ", index = " + index);
});

	
$('.square').click(function() {
    $(this).css('background-color', 'blue');
  });


  var button = document.getElementById("circle"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Counter: " + count;
};