const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite sua idade:'));
let idadeDias = idade * 365;

console.log(`Sua idade em anos é:${idade}\nEm dias é ${idadeDias}.`);