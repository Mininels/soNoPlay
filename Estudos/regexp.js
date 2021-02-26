//Expressão Regular

var regexpLiteral = /js/ //literal
var regexpConstrutor = new RegExp("Jedi");

var stringCurso = "formação Completa JavaScript - mestre js Jedi"

console.log(regexpLiteral.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso)) //Procura coisas similares do StringCurso