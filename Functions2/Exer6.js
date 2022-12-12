/*

Remove Last Char

Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.
removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

*/

function removeLastChar(string) {

	return string.slice(0, -1);
};

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
console.log(removeLastChar('hello'))
//I used -1 instead of string.length -1 (although that was my first instinct)
// I used -1 because it works the same according to:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice