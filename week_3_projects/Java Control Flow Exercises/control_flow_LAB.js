console.log("top of JS");

/*------------------Lab Instructions ----------------------


control flow statements exists to allow the programmer to control the
execution flow of a program. This is done primarily through the use of decision statements and
loops.

Both of those will be heavily highlighted in this section. As a part of each of those statements
the final control, the branch statement, will also be discussed.


The Math.random() function is used to create a random double number between 0.0 and 1.0. Make
that an integer value between 1 and 100 by using the following statement:

int randOne = (int)(Math.random() * 100); ((CHECK))

^ remember that's Java..


Next perform the following evaluations using multiple if statements.

If the number is greater than 70 print the string "Big Number". ((CHECK))
If the number is less than 40 print the string "Small Number". ((CHECK))
If the number is in between 40 and 70, or equal to 40 or 70, print the string "Medium Number". ((CHECK))

Write the same tests as above but using an if-else statement. Which is more efficient? Easier to
code? Easier to read? Easier to maintain?
Could the above if statement be written with an equivalent switch statement? (Short answer -
yes.) What would be the answers to more efficient? Easier to code? Easier to read? Easier to
maintain?

*/

//beginning of my code

//This function creates a number between 1-100 and evaluates it as big (>70), small (<40),
// or medium (>= 40, and <= 70) Sometimes, however, I'm getting multiple returns to the console, a number will
// qualify for 2 categories (small and medium, for example) Why?

function myFunction() {
  randomNum = Math.floor(Math.random() * 101);
  console.log("Our number is " + randomNum + " and it's a...");

  if (randomNum > 70) {
    console.log("Big Number");
  }

  if (randomNum < 40) {
    console.log("Small Number");
  }

  if (40 <= randomNum <= 70) {
    console.log("Medium Number");
  }
}

/*
int count = 44;
if ( count > 20 )
{
 String msg = "Count is large!";
 System.out.println(msg);
}
if ( count > 50 )
{
 String msg = "Count is VERY large!";
 System.out.println(msg);
}
System.out.println("Finished checking count.");
// output:
// Count is large!
// Finished checking count.

(target today for groceries
go straight to therp. then to targ, then to homedepot
    13 min drive... but

    5:15 - 5:30- 5:45 5:50


    respond to Heather
    respond to Esti
    respond to Emma?
    respond to Adam
    )

    */
