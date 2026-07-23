const prompt = require('prompt-sync')();
let numeros = [];
let indice = Number(prompt('Digite a quantidade de número que queira digitar:'))

function solicitarValores(qtde)
{
    for(let cont = 1; cont <= qtde; cont ++)
    {
        numeros[cont] = Number(prompt(`Digite o número N°${cont}.`));
    }
}

function exibirOrdemCorreta(myArray)
{   
    return `Lista de números na ordem que foi digitada: ${myArray} \nLista de números na ordem crescente:${myArray.sort((a, b) => a - b)}`;
       
}

solicitarValores(indice);
console.log(exibirOrdemCorreta(numeros));