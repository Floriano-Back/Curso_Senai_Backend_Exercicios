const prompt = require('prompt-sync')();

let base = Number(prompt('Digite a base:'));
let altura = Number(prompt('Digite a altura:'));
let area = (base * altura) / 2;

console.log(`A área é de: ${area}cm`);