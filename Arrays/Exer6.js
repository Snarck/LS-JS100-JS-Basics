/*


Vocabulary

We've been given an array of vocabulary words grouped into sub-arrays by meaning.
This is a two-dimensional array or a nested array.
Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...


*/


let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (i = 0; i < vocabulary.length; i += 1 ) {
  for(j = 0; j < vocabulary[i].length; j += 1) {
		console.log(vocabulary[i][j]);
	};

};



// Expected output:
// happy
// cheerful
// merry
// etc...

//very simple nested for loop clears it up. 
//I feel like the "solution" on this one is a bit porly written.  They'r using ++ instead of =+ and their syntax is weird.