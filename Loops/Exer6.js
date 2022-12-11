/*

Take a moment to read the MDN documentation on the continue statement.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue

Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. 
If the element is null, skip forward to the next iteration without logging anything to the console.



*/

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (i = 0; i < cities.length; i += 1) {

	if(cities[i] === null) {
		continue;
	}
  console.log(cities[i].length + ': ' + cities[i]);
};

//added more to the console than asked because I wanted to double-check I did it right.

