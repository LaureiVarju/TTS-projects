
console.log("Test");

var obj1 = {
    name: "Rect",
    height: 23,
    width: 12,

    display: function () {

        console.log("name: " + this.name + ", height " + this.height + ", width" + this.width);
    }


};

obj1.display();


function Rect(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;

    this.display = function()
   

}

obj21 = new Rect("Rec1", 7, 9);

obj21.display = function()


{



}
obj22 = new Rect("Rec2", 11, 15);
obj23 = new Rect("Rec3", 3, 20);
console.log(typeof obj21);
console.log(typeof Rect);
console.log(obj21);
