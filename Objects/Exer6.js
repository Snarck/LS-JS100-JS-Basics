/*



Is it true?

We are experimenting with some code to get more comfortable working with objects.
Run the snippet below and explain why "It's true!" is never output.


let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/* I stared at this for a while wondering exactly what was wrong/
and then it hit me, === is a strict equality operator.  There's nothing in the object that === true.
Properties/Keys in objects are always strings.
if we change it to if(prop) - the values *are* truthy, and will run, but there's no "True" value.
Furthermore, even though we have a key - "true", that is not the BOOLEAN true, it's a string saying 'true'.
if we change line 31 to "true: true," and
on line 38 change prop to obj[prop] we'd check if the value of "true" is true on it's iteration, which is a boolean. 
It'd output one, single, "it's true!"

let obj = {
  num: 42,
  'property name': 'string value',
  true: true,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (obj[prop] === true) {
    console.log("It's true!");
  }
}

*/