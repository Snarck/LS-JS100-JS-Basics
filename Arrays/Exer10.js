/*


Passcode

We generated parts of a passcode and now want to combine them into a string.
Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

*/

// There two approaches I can think of to take with this problem. 
// you can loop through and concat each value with a " -" included. 
// or you can use join.   Join is by far easier, so let's do that.

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
console.log(passcode.join("-"));

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

//further exploration:

console.log(passcode.join(''));
