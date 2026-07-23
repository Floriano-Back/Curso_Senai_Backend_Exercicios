const prompt = require('prompt-sync')();
let numero;

do
{
    numero = Number(prompt('Digite um número:'));

}while(numero<=0)