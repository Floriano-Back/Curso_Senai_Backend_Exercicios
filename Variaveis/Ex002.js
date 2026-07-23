const prompt = require('prompt-sync')();

let num1 = Number(prompt('Escreva um número:'));
let num2 = Number(prompt('Escreva outro número:'));
let soma = num1 + num2;

console.log(`A soma de ${num1} + ${num2} = ${soma}`);