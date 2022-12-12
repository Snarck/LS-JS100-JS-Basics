/*
Car Keys

Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};



*/

const keys = [];
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

for(let prop in vehicle) {
  keys.push(prop);
};

console.log(keys);

/*
I was off the mark on this one, hard.  Reviewing material to better understand. 
My error was not looking at pre-built functions/methods for this.  I did type in MDN Objects, but it gave me a site with general information,
not a list of pre-builts. 

Still, it's good to know both ways!

*/