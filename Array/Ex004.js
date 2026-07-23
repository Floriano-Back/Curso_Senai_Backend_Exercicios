const prompt = require('prompt-sync')();
let numero = [];

for(let cont = 0; cont <= 9; cont ++)
{
    numero[cont] = Number(prompt('Digite alguns números:'));
}

let maior = Math.max(...numero);
let menor = Math.min(...numero);

console.log(`O maior valor digitado foi ${maior} e o menor foi ${menor}`);
