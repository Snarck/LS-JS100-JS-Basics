/*
TypeError

Run the following code.



let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}



if (tweet.length() > 140) {
          ^

TypeError: tweet.length is not a function
    at Object.<anonymous> (/home/snk/preperations_exercises/JS100-JS-Basics/ReadingDoc2/Exer10.js:10:11)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)

Check the documentation of both TypeError and length, in order to find out what causes the error.


tweet.length is not a function, as according to the error.  We're doing a method call () on Length.

According to the MDN, length is a *property* not a method.  It's invoked without the parenthesis. 
*/



let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
} else {
	console.log('The tweet was fine!'); // so I can make sure it's working :)
}
