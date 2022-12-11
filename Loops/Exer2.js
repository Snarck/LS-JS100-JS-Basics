/*
Countdown

The code below logs the numbers from 1 to 10.
Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.
*/

for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}
console.log('Launch!');

/*

I changed the i = 0 to i = 10, i >= 1, -= 1.  
That way the incremeneter decreases down from 10 to 1. 
The After the for loop executes, console.log will execute. 
I more or less did the same as the solution, with the exception being they did > 0, which is probably better.
*/