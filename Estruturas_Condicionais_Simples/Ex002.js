const prompt = require("prompt-sync")();

let numero = Number(prompt('Digite um número: '));

if (numero >= 0)
{
    console.log('O número é positivo.');
}

else
{
    console.log('O número é negativo');
}