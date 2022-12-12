/*


Arrow Functions (Part 1)

Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

*/

const template = 'I VERB NOUN.';
/*
function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}
*/
let sentence = (verb, noun) => template
                               .replace('VERB', verb)
															 .replace('NOUN', noun); 




console.log(sentence('like', 'birds'));
// logs: I like birds.

// Interesting https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// changed formatting to look more like solution; but came to same result. 
