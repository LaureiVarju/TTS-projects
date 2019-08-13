console.log("JS File Linked");

(function($) {
  // here $ would point to jQuery object
  $(document).ready(function() {
    // shows alert modal once page is loaded
    alert("Hello, World!");
  });
})(jQuery);

(function($) {
  $(document).ready(function() {
    $("#node-link").click(function(event) {
      alert("Thanks for visiting node!");
      event.preventDefault();
    });
  });
})(jQuery);

$("#node-link").on("click", function(event) {
  //slightly different way of writing it
  alert("Thanks for visiting node!");
  event.preventDefault();
});

function sayThanks(event) {
  alert("Thanks for visiting node!");
  event.preventDefault();
}

$("#node-link").click(sayThanks);

$(document).ready(function() {
  $("#button").click(function(event) {
    var msg = $("#name").val();
    alert("Hello " + msg);
  });
});

//form validation below

$(document).ready(function() {
  $("#simpleForm").submit(function(event) {
    // simple requirement - is there a name?
    var theName = $("#name").val();
    if (theName) {
      alert("Hello " + theName);
      // let default form submission occur
    } else {
      alert("Cannot say hello without a name!");
      event.preventDefault();
      $("#name").focus();
    }
  });
});

$(document).ready(function() {
  $("#btnChange").click(function() {
    // Using the core $.ajax() method
    $.ajax({
      url: "https://localhost:44392/api/heroes",
      type: "GET",
      dataType: "json"
    }).done(function(data) {
      $.each(data, function(index, value) {
        $("#list").append("<div>" + value.name + "</div>");
      });
    });
  });
});
