/*
Calculate Cat Age

Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.


*/

function catAge(hYears) {

	// oh god this looks ugly, let's clean it up.
  /*let firstYear = 15;
	let secondYear = 9;
	let catYear = 4;
  let catAge = 0;	
	if(hYears) {
		if(hYears >= 2) {
			hYears -= 2
			catAge += firstYear;
			catAge += secondYear;
			if(hYears) {
				catAge += hYears * catYear;
			};
		} else if(hYears === 1 ) {
        catAge = firstYear;
		};

	};
*/
switch(hYears) {
	case 0:
		return 0;
	case 1:
		return 15;
	case 2:
		return 24;
	default:
		return 24 * (hYears - 2) * 4;
};


	//return catAge;

};

//I thought of using a switch originally, but went with the if loop because I didn't realize 
//default was a thing for switches.  After looking it up, I discovered
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// helped me better understand what I was doing wrong.







console.log(`${catAge(0)} ${catAge(1)} ${catAge(2)} ${catAge(3)}`);
catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32