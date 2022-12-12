/*


Greetings From Jane

Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
};

jane.greet('Bobby'); // Hej, Bobby!

*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
	greet: function(string) {
		return console.log(`Hej, ${string}!`)
	},
  greetings: (string) => {
    return console.log(`Hej, ${string}!`)
	}
};

jane.greet('Bobby'); // Hej, Bobby!
jane.greetings('Steve');

//in an arrow and non-arrow.  Arrow is more readable, IMO.
