const prompt = require("prompt-sync")();
let numero = Number(prompt('Digite um número para a tabuada:'));
let cont = 1;

console.log(`--- A tabuada do ${numero} ---`)
while(cont <=10)
{
    console.log(`${cont} X ${numero} = ${cont * numero}`);
    cont++;
}

console.log('FIM');