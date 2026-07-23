const prompt = require('prompt-sync')()
let numero = [];

for(let cont = 0; cont <=9; cont++)
{
    numero[cont] = Number(prompt('Digite alguns números:'));
}

for(let cont = 0; cont <=10; cont++)
{
    console.log(numero[cont]);
}

console.log('Fim');