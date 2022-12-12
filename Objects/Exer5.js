/*

Dot Notation vs Bracket Notation

Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

{
 prefix = 'Pacific',
} 
On line 10 we're saying that the prefix key contains pacific. 
////////////////////////

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

{

	Indian: 'Pacific'

}
// on line 23 we're saying that the 'Indian' key contains the 'Pacific'
*/
/*
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

I was right. 
*/

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

// Once again, I was right.