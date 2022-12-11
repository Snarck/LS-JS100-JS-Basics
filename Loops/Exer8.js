/*

That's Odd

Write a while loop that logs all odd natural numbers between 1 and 40.

*/

let iter = 1;

/*
while(iter < 41) {
  if(iter % 2 !== 0) {
		console.log(iter);
	};
	iter += 1;
};

// I overthought this one.  could just do +=2 for the same result. 
*/

while(iter < 41) {
	console.log(iter);
	iter += 2;
};

//haha, read the solution and they called me on my first iterator.
//Make sure to think about the least amount of iterations in code for performance!!!