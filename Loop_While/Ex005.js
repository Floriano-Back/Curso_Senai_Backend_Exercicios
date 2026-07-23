const prompt = require("prompt-sync")();
let numeroInicial = Number(prompt('Digite um número:'));

while(numeroInicial >= 0)
{
    console.log(numeroInicial);
    numeroInicial--;
}

console.log('FIM')