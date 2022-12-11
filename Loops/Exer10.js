/*


Do...While

What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.


let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

-------------------------

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);



The do will run whatever is in the backets automatically.  It'll always run

do
  console.log('Woooot!');
  counter -= 1;

at least once. 
while the while will only excute the code in it's body if it meets the conditional. 

In the above case, the counter is set to 0, the while loop will only run if the counter is greater than 0.  It won't run,
because 0 is not greater than 0.

In the do while, even though the counter is 0 (the conditional in the while) it will still output to log,
"Woooot!" and decrease the counter (from 0 to -1) 
It will not repeat, however, because -1 is not greater than 0. 


*/