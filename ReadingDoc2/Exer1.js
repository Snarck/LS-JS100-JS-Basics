/*

In the following code snippet, find all violations of the style guide.
Rewrite it so that it conforms with the guide.

let ice_cream_taste = 'chocolate'  Both of these lines fail to use camelCase, don't end with a ;
let ice_cream_density = 10

while(ice_cream_density > 0)    The while loop has has a { bracket that starts one line below, should be after the parenthesis.  No space after While. 
{
    console.log('Drip...');  //these are both improperly indented. 
    ice_cream_density -= 1;
} // no ; 

console.log('The '+ ice_cream_taste +' ice cream melted.'); // for readability, it should have spaces between the +'s. 

*/

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {

  console.log('Drip...');
	iceCreamDensity -= 1;

};

console.log('The ' + iceCreamTaste + ' ice cream melted.');

