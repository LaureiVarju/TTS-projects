console.log("Top of js");

/*----- TTS Exercise Day 12 Items at Bottom-------*/

var course = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"],
  students: [
    {
      name: "Steve",
      computer: {
        OS: "Linux",
        type: "laptop"
      }
    },
    {
      name: "Katy",
      computer: {
        OS: "OSX",
        type: "macbook"
      }
    },
    {
      name: "Chuck",
      computer: {
        OS: "OSX",
        type: "macbook"
      }
    }
  ],
  preReqs: {
    skills: ["html", "css", "git"],
    equipment: {
      laptop: true,
      OSOptions: ["linux", "osx"]
    }
  }
};
//This covers requirements 1-6 of the exercise
console.log(
  course.name,
  course.teachers[1],
  course.students[0].name,
  course.students[1].computer.type,
  course.preReqs.equipment,
  course.preReqs.equipment.OSOptions[1]
);

//Item 7
let a = course.preReqs.equipment.OSOptions.join(" or ");
console.log(a);

// Item 8
message = "8. An array of all the students that are using OSX.";
console.log(message + "\n" + "");

var theArrayofStudentNames = []; //building the arrays to cross reference later?
var theArrayofStudentWithOSX = [];
var students = course.students; //creating a short-hand variable here ?
var student = students.shift(); //taking off the first student in index 0?

while (student) {
  //while the student variable exists?

  if (student.computer.OS == "OSX") {
    theArrayofStudentNames.push(student.name);
    theArrayofStudentWithOSX.push(student);
  }
  console.log("Student: " + student.name);
  student = students.shift();
}
console.log(message + "\n" + theArrayofStudentNames);

/*---------Exercise Requirements ------/
Output the Following:

1. Name of the course ('JavaScript Applications') Y
2. Name of the second teacher ('Shane')
3. Name of the first student ('Steve') Y
4. Katy's computer type ('macbook') Y
5. The preReq equipment object Y
6. The second OSOption from equipment prereqs ('osx')  Y
7. string listing the OSOptions separated by 'or' ('linux or osx') Y
8. An array of all the students that are using OSX.



var theArrayofstudents = [];
var theArrayofstudentsWithOSX = [];
var students = course.students;
var student = students.shift();

while (student) {

  if (student.computer.OS == "OSX") {
    theArrayofStudentNames.push(student.name)
    (count++ > 5) break;
  if (true) {
    theArray.push(student.name);
  }
console.log("Student: " + student.name);
student = students.shift;
}
console.log(message + "\n" + theArray)
-----------------------------------*/

/* Additional Notes

var course = {
  name: "JavaScript Applications",
  awesome: true
};
//this is an object, look it has multiple things assigned to it
//An object is a set of keys and values, like a dictionary.

console.log(course);

var show = {
  name: "The Office",
  awesome: true,
  cast: ["Jim", "Pam"],
  actor: {
    name: "Dwight",
    company: "Dunder Mifflin"
  }
};

//Values can be primative objects, arrays, or other objects ^ see above

course.name;
course["name"];

//when addressing an object, you can use more than one syntax. the [] way is handy with strings

var course = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"]
};

console.log(course.teachers[0]); //Assaf


course.name = "super duper class";
// Updating an object after it's created

course.fun = true; //add a property
delete course.name; //remove one
//mutating an object..you can also assign entirely new keys and delete existing ones.



//more complex addressing below
var apple = {
  name: "Palo Alto",
  awesome: true,
  developers: ["Steve Jobs", "Steven Woz"],
  owner: [
    {
      name: "Steve",
      computer: {
        OS: "Mac",
        type: "laptop"
      }
    }
  ]
};

console.log(apple.developers[0].computer.OS);

*/
/*---------------------------------------------*/
