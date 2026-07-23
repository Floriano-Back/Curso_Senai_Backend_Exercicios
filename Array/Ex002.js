const prompt = require('prompt-sync')();
let numeros = [], soma = 0;

for(let cont = 0; cont <= 7 ; cont ++)
{
    numeros[cont] = Number(prompt(`${cont+1} - Digite alguns números:`));
    
}

for(let cont = 0; cont <= 7 ; cont ++)
{
    soma = numeros[cont] + soma    
}

console.log(`A soma total é: ${soma}`);