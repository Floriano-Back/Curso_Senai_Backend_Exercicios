const prompt = require("prompt-sync")();
let cont = 0;
let numeroFinal = Number(prompt('Digite um número:'));

while(numeroFinal >= cont)
{
    console.log(cont);
    cont++;
}

console.log('FIM')