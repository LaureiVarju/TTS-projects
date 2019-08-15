function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.Name = name;
        this.Age = age;
    }
    Employee.prototype.details = function () {
        return this.Name + " is " + this.Age + " years old.";
    };
    return Employee;
}());
