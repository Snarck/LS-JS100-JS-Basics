/*


Filter

Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

*/

let scores = [96, 47, 113, 89, 100, 102];
let counter = 0;

const results = scores.filter(word => word >= 100 );
console.log(results.length);

//Filter makes it super easy!.. but I apparently did it differently than they wanted. 
// They used a for loop to iterate a counter after doing a check.  That's probably more effective. 