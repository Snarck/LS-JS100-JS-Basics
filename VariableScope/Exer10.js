/*


What's my value? (Part 10)

What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

I think that a= will equal the object with John mutated into Jane.

The reasoning is that a is in scope and mutable.
function mutates a
myfunction invokes the function
console.log outputs the object with "john" replaced with Jane.



*/