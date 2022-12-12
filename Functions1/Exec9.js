/*
Locale Part 1

Write a function that extracts the language code from a locale.
A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.
*/

function extractLanguage(locale){
  return console.log(locale.split('_')[0]);
};

//once again I know I don't need console log, I'm just doing it to see output.
//I can't beleive I did it lol
extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'