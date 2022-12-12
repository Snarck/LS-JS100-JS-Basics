/*


Blank? Version 2

Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true


*/

function isBlank(string) {

	//return string === true ? false : true;
	return string.trim().length === 0;
	
	}



console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

//nailed it in one