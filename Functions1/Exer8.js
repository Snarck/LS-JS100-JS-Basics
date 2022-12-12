/*


Internationalization 1

Write a function that takes an ISO 639-1 language code and returns a greeting in that language.
You can take the examples below or add whatever languages you like.

*/

function greet (lang) {

  switch (lang) {
    case 'en' :
      return console.log('Hi!');
		case 'fr' :
      return console.log('Salut!');
		case 'pt' :
			return console.log('Olá!');
		case 'de' :
			return console.log('Hallo!');
		case 'sv' :
			return console.log('Hej!');
		case 'af' :
			return console.log('Haai!');
	}; 
};

//I did them all in console so that I can see the output, I know I don't need it.

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'