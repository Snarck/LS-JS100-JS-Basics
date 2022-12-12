/*


What's my value? (Part 5)

What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();


I think it outputs 1 and then 2. 

I was wrong! let a = 2 on line 13 actually creates a new scope.  Because of this, line of 12 is no longer in scope!!
*/