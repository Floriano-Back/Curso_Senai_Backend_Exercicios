const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Escreva sua primeira nota:'));
let nota2 = Number(prompt('Escreva sua segunda nota:'));
let media = (nota1 + nota2) / 2;

console.log(`A media foi de: ${media}`);