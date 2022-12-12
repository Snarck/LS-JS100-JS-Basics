/*


Add a Property

Below is a simple object representing our dog, Fido. On lines 8 and 9, 
write code to add properties 'age' and 'favorite food' to the fido object.

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

*/

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.

fido.age = '10';
fido['favoriteFood'] = 'hamburger';
console.log(fido['age'])
console.log(fido.favoriteFood)
console.log(fido);

//got fiesty with it.
// camelCase (and occasionally) Snake_Case for formatting - but the exercise specifically requested a space,
fido['favorite food'] = 'camel';
console.log(fido);
//brackets bc you can't use dot notation with spaces.. also why you shouldn't use spaces in an object property.