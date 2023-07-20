const x = "Aki";

function introduction(name) {
  return `Hi, my name is ${name}.`;
}

console.log(introduction(x));

let y = "Ember.js";
function introductionWithLanguage(name, language){

    return `Hi, my name is ${name} and I am learning to program in ${language}.`;


}
console.log(introductionWithLanguage(x , y));

function introductionWithLanguageOptional(name, language="JavaScript"){

    return `Hi, my name is ${name} and I am learning to program in ${language}.`;


}
console.log(introductionWithLanguageOptional(x));
