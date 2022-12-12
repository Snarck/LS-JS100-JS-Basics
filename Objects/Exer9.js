/*


...and vice versa

Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }


*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];


console.log(Object.fromEntries(nestedArray));
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let nukem = {};

for(i = 0; nestedArray.length > i; i += 1) { 
  let duke = nestedArray[i];
	
	nukem[duke[0]] = duke[1];
};

console.log(nukem);

	//two ways.  The for loop is a little complicated so I'll break it down.
	/*
  duke = the iterated value in the array ([title, duke]). it, on itself, is an array. 
	duke[title (taking first value)] = duke[duke(taking second value)]
	such as,
	objectName['Key'] = ['Property']
	Objectname.array[0] = array[1]
	make the first value in the array the key, second value the property   

	*/