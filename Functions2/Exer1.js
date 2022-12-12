/*


Greet 1

How can we alter the function definition of greet so that the parameter greeting 
is assigned a default value of 'Hello' when no argument is passed to the function invocation?

function greet(greeting) {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!


*/

function greet(greeting = 'Hello!') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
// if we call greet (undefined) we still get Hello!/default parameter