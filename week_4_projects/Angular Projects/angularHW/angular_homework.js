var Person = /** @class */ (function () {
    function Person(fName, lName, age, phone, state, zip, work, wage, cert, hours) {
        this.firstName = fName;
        this.lastName = lName;
        this.Age = age;
        this.phoneNumber = phone;
        this.State = state;
        this.zipcode = zip;
        this.occupation = work;
        this.hourlyWage = wage;
        this.certification = cert;
        if (hours) {
            this.workingHours = hours;
        }
        else
            this.workingHours = 40;
    }
    // These methods/functions have to be within the class, since they're referring to "this"(?)
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getNumber = function () {
        return "This person's phone number is: " + this.phoneNumber;
    };
    Person.prototype.location = function () {
        return "This person's location is " + this.State + " " + this.zipcode;
    };
    Person.prototype.weeklyWage = function () {
        return (this.firstName +
            this.lastName +
            "'s weekly wage is: " +
            this.workingHours * this.hourlyWage);
    };
    //   weeklyWage(hours?: number) {
    //     this.workingHours = hours;
    //     if (hours) {
    //       this.workingHours = hours;
    //     } else {
    //       this.workingHours = 40;
    //     }
    //     return (
    //       this.firstName +
    //       " " +
    //       this.lastName +
    //       "'s weekly wage is: " +
    //       this.hourlyWage * this.workingHours
    //     );
    /*Ricardo Rhone helped me write this function */
    Person.prototype.addCerts = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            this.certification.push(myArray[i]);
        }
        return this.certification.toString();
    };
    /*  the use of Person here is telling the compiler that this function  will return a person*/
    Person.createEmployee = function (options) {
        return new Person(options.firstName, options.lastName);
    };
    return Person;
}());
/* The constructor makes the following fields: "Kyle", "Doe" etc mandatory for personA to be defined
in the person class. They have to follow the right order *and* data type to successfully compile. */
var personA = new Person("Kyle", "Doe", 52, //age
1234567890, //phone number
"NJ", "07940", "delivery", 12, // hourly wage
["MBA", "CST", "TTV"], //certification
10 //hours worked in a week
);
/* I put 'null' in working hours here earlier because I made that property optional in the contructor with '?'
...but I needed to continue to the cert property because it's required, so I couldn't leave hours blank */
/* follow  up, when trying add another property I got an error for sandwiching an optional between requireds, so I changed the order,
I can leave it blank or put null and the output is correct */
var personB = new Person("Cecilia", "Ibran", 70, 1234567891, "NJ", "07942", "therapist", 80, ["MBA"], null);
var personC = new Person("Chris", "Gauss", 40, 1234567891, "NJ", "07943", "meteorologist", 100, ["MBA"], 12);
document.getElementById("div1").innerHTML = personA.getNumber();
document.getElementById("div2").innerHTML =
    personB.firstName + "'s 'phone number is " + personB.phoneNumber;
document.getElementById("div3").innerHTML = personC.getFullName();
document.getElementById("div4").innerHTML = personA.location();
document.getElementById("div5").innerHTML = personB.weeklyWage();
/* Things aren't currentlty compiling with this line below */
document.getElementById("div6").innerHTML = personA.addCerts([]);
var personD = {
    firstName: "Michelle",
    lastName: "Dilzell",
    Age: 35
};
document.getElementById("div7").innerHTML = Person.createEmployee(personD).getFullName();
/*  Testing code here


constructor(name: string, age?: number) {

    this.Name = name;
    if (age) {
        this.Age = age;
    }
    else {
        this.Age = 40;
    }
}

printUser(name: string, age: number = 39): string {
    return name + " is " + age + " years old."
}

*/
// person.degreeCert(["MBA", "CSM", "MCSD", "MCSW", "LCSW"])
// Create a property for a person's certifications/degrees that is an array. These could be things such as
// MBA, CSM, MCSD, etc. Next create a function called addCerts() that takes an unknown number of
// arguments and adds them to the array.
// interface PersonData {
//     title: string;
//     name: string;
//     salary?: number;
//     /* salary is optional bc of the ? symbol */
//     readonly SSN: number;
// }
// class Employee {
//     Name: string;
//     Age: number;
//     constructor(name: string, age: number) {
//         this.Name = name;
//         this.Age = age;
//     }
//     details(): string {
//         return this.Name + " is " + this.Age + " years old.";
//     }
// }
// function sayHello(person: string): string {
//     return "Hello, " + person;
//   }
//   var user = "Super Student";
//   document.getElementById("div1").innerHTML = sayHello(user);
