const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número:'));
let ant = num -1;
let suc = num +1;

console.log(`O número:${num}\nAnterior:${ant}\nSucessor:${suc}`);