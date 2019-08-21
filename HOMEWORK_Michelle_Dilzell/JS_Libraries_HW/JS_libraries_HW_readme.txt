Name: Michelle Dilzell
Github user id: LaureiVarju
Assignment Title: Angular Basics Homework
Assigned: 8/12/19 (Day 16 Bootcamp - Week 4)

Link to the ongoing assignment in github: 
************************************

Homework Status:
In Progress -- See work done so far below
************************************
LODASH LIBRARY SECTION
************************************

1. Download (or use a CDN) and link the Lodash library to an HTML doc. 
(COMPLETE -- I used this CDN: https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js)

2. Next, create some values for testing. (COMPLETE -- see array in lodash_examples.ts)

3. What is the output (when using _.chunk)? What are the sizes of the resulting arrays?

(ANSWER: When using _.chunck(arrayname, number) the output will be the first array values equivalent to the given number (3 in our example). Then the console log will display a new row of that number, until all the values of the array have been displayed.

4. Create arrays with the following elements:
-----------------------------------------------------------
//1-20:

let arr20 = _.range([(start = 1)], 21, [(step = 1)]);
console.log(arr20);
-----------------------------------------------------------
-----------------------------------------------------------
//50-100: 
//this one is chunked to display in sets of 5

let arr50 = _.range([(start = 50)], 101, [(step = 1)]);

var out50chunk = _.chunk(arr50, 5);
console.log(out50chunk);
-----------------------------------------------------------
-----------------------------------------------------------
//1-100, only even:

let arr100evens = _.range([(start = 2)], 101, [(step = 2)]);
console.log(arr100evens);
-----------------------------------------------------------
-----------------------------------------------------------
//1-100. only odds;

let arr100eodds = _.range([(start = 1)], 101, [(step = 2)]);
console.log(arr100eodds);
-----------------------------------------------------------
-----------------------------------------------------------
//1-500, only multiples of 20.

let mult20 = _.range([(start = 20)], 501, [(step = 20)]);
console.log(mult20);
-----------------------------------------------------------
-----------------------------------------------------------

6. Using the documentation for the _.filter() function, 
create a statement that prints the number of residents 
in Colorado.
(COMPLETE - see below)

let ColPeople = _.filter(arrObj, { state: "CO" });
console.log(ColPeople);
-----------------------------------------------------------

7. Using the documentation for the _.countBy() function create 
statements that print out the number of residents in each state.
(COMPLETE -- see below)

var residentsbystate= _.countBy(arrObj, "state");
console.log(residentsbystate);
-----------------------------------------------------------
8. Using the _.filter() function and any necessary string methods, 
find and display all the people who have a last name of 7 more letters. 
(COMPLETE-- see below)

//I receieved some help with this one
let lastname7plus = _.filter(arrObj, function(obj) {
  return obj.name.split(" ")[1].length >= 7;
});
console.log(lastname7plus);
-----------------------------------------------------------
************Not yet completed*************
9. Use the foreach loop and correct string function to print the state in all lower case.

10. Alter the function to print it capitalized.
-----------------------------------------------------------
MOMENT LIBRARY SECTION 
1. Download the moment.js file or reference a CDN(COMPLETE - saved locally)

2. Using the values in the chart, print each of the above dates in the following formats:

A. Long day, short month, day number, year and time
B. Short month, day, year, and time
C. Week of year, short year
D. Quarter of year, long year

3. Use the difference funtion to find the difference between the ISO and rfc dates in days, weeks, and months.

4. Find the difference between the current date and the rfc in weeks, months, and years.
-------------------------------------
MATH LIBRARY SECTION (cdn)
https://cdnjs.cloudflare.com/ajax/libs/mathjs/6.0.4/math.js

DATATABLE LIBRARY SECTION (ccs and js cdns) (WILL ALSO NEED JQUERY)
https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js <-- jquery (note to self...fix this, core version won't work)

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.18/datatables.min.css"/>
 
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.18/datatables.min.js"></script>

CHART LIBRARY SECTION (cdn)
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js

REACT LIBRARY SECTION (2 cd links)
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

VUE LIBRARY SECTION (cdn link:)
<script src="https://cdn.jsdelivr.net/npm/vue"></script>




