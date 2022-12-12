/*
Convert an object to a nested array

Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person));
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//MY original instinct was to use a for-in loop again, but instead I made sure to find a built-in.
// If I were to use a for, it would be the same as last, just I would add person[prop] to the parameter. 
