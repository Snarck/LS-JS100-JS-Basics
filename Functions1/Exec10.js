/*


Locale Part 2

Similar to the previous exercise, now write a function that extracts the region code from a locale. 
For example:


*/
/*
function extractRegion(locale) {
  return console.log(locale.slice(3, 5));
}
using slice
*/

//using split.  both work.  solution was non-commented though. 
function extractRegion(locale) {
  return console.log(locale.split('.')[0].split('_')[1]);;
}



//provided code
extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'