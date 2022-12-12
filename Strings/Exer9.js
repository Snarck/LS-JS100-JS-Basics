/*

Capitalize Words

Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
array.push[element]
*/

let string = "launch school tech & talk";
let stringArray = string.split(" ");
let finishedSentence = "";


for(i = 0; i < stringArray.length; i += 1) {
  let remainder = stringArray[i].slice(1);
	let capLetter = stringArray[i][0].toUpperCase();
  finishedSentence += capLetter + remainder + " ";
};

console.log(finishedSentence);

//I did it a little different than the solution, but came to a similar conclusion. 


