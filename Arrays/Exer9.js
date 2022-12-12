/*


Travel

The destinations array contains a list of travel destinations.
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

Write a function that checks whether or not a particular destination is included within destinations,
without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, 
the expected output is true, whereas the expected output for 'Nashville' is false.

*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

	function locChecker(destination, loc){
 
    for(i = 0; i < destinations.length; i += 1) {
      if(destinations[i] === loc){
				return true;
			};
		};
		return false;

	}

	console.log(locChecker(destinations, 'Bartland'));
	console.log(locChecker(destinations, 'Sydney'));
	console.log(locChecker(destinations, 'Rio de Janeiro'));

// output works correctly. I would have used indexOf but I wanted to avoid built-in, esp. after includes wasn't allowed.  