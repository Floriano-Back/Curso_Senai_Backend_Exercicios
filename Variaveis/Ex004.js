const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um valor:'));
let dobro = num * 2;

console.log(`O dobro do número ${num} é ${dobro}`);