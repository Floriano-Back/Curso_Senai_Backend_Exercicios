let prompt = require('prompt-sync')();
let numero = [];
let par =0, impar = 0, totalPar =0; totalImpar = 0;

for(let cont = 0; cont <= 9; cont++)
{
    numero[cont] = Number(prompt('Digite alguns números:'));

    if(numero[cont] % 2 ==0)
    {
        par++;
    }

    else
    {
        impar++;
    }
}
console.log(`Tem números: ${par}.\n Tem números: ${impar}`);