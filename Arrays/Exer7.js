/*


Equality

Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

I think it'll be "false", 
arrays are not primative values, they're objects, objects are stored differently. 
the array1 might be pointing to a different place in memory than array 2. 


*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// I was right :)