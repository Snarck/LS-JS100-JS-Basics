/*

Looping over Array Elements

Using the code below as a starting point, write a while loop that logs the elements of array at each index
and terminates after logging the last element of the array.

*/
// supplied code
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
	
	console.log(array[index]);
	index += 1;

};

// I got almost word for word the same exact code. 
//Further Explanation:  "What would the code output if the array was empty"
// An array that empty has 0 as it's length, so index < 0 = would not run the while loop. 