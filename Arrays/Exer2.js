/*
Last Element

Write a function that returns the last element of an input array. For example:

*/

function last(array){
	return array[array.length - 1];
};

console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'

// array.length -1 bc the .length doesn't account for 0.  Nailed it.