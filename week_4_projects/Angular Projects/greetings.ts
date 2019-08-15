function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

class person {

    firstName: string;
    lastName:  string;
    age: number:
    phoneNumber: number;
state: string;
zipcode: number;
occupation: string;
}

interface PersonData {
  title: string;
  name: string;
  salary?: number;
  /* salary is optional bc of the ? symbol */
  readonly SSN: number;
}

class Employee {
  Name: string;
  Age: number;

  constructor(name: string, age: number) {
    this.Name = name;
    this.Age = age;
  }
  details(): string {
    return this.Name + " is " + this.Age + " years old.";
  }
}
