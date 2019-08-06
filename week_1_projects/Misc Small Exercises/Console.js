(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();

console.log("Top of 'Console.js'.")
var circle = {
  diameter: 12, 
  lineThickness: 3, 
  lineColor: "red" 

toString: function(){
  console.log("Circle: diameter = " + circle.diameter +
  "line thickness = " + this.lineThickness +
  "line color = " + this.lineColor );
}

};

circle.toString();