/*


Alphabet

Split the string alphabet into an array of characters.
let alphabet = 'abcdefghijklmnopqrstuvwxyz';


*/
//two ways to do it. 
const abc = [];
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
for (i = 0; i < alphabet.length; i += 1 ) {
  abc.push(alphabet[i].toUpperCase());
};


//the easier way is just.. split it with a seperator. 
//but alphabet itself is an array and you can iterate to get it!
//bonus uppercase :)
console.log(abc);
console.log(alphabet.split(''));