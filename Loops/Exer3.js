/*

Triple Greeting

Write a loop that logs greeting three times.

*/

let greeting = 'Aloha!';

for(i = 1; i <= 3; i += 1 ) {

  console.log(greeting);

}

// in a while

let iterator = 1;

while (iterator <= 3) {

	console.log(greeting);
	iterator += 1;
	
}

//I prefer the former because it lets me keep my variables more in scope.  If we try to run the while loop
//again it'll just add to iterator - 3, 4, 5, 6...