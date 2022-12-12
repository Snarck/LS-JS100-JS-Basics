/*


Repeat

Implement a function repeat that repeats an input string a given number of times, as shown in the example below;
without using the pre-defined string method String.prototype.repeat().



*/


function repeat(iterates, string){

	let value = "";
  while(iterates > 0) {
	  value += string;
		iterates -= 1;
  };
	return value;
};

console.log(repeat(3, 'ha')); // 'hahaha'

// oh my gosh I was so right!!!!!!!