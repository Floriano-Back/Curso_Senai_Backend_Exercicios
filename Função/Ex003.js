const prompt = require('prompt-sync')();
let numeros = [];

function somaNumeros(a,b)
{
    return a + b;
}

for(let cont = 0; cont <=1; cont++)
{
    numeros[cont] = Number(prompt('Digite alguns números:'));
}

console.log(somaNumeros(numeros[0], numeros[1]));
