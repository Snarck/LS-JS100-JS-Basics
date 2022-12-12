/*

Write a function that checks whether a string is empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true



*/


function isBlank(string) {

//return string === true ? false : true;
return string.length === 0;

}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

//my method was much more verbose than the option - it still worked, praying on the truthy values
//the solution result was much more succinct, though, and better.

