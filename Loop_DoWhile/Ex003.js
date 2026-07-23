const prompt = require('prompt-sync')();
let soma = 0, numero = 0, cont =0;
let duvida;

do
{
    console.log(`${cont+1}°= ${numero} a soma é ${soma}`);
    numero = Number(prompt("Digite um número:"));
    soma = numero + soma;

    duvida = prompt('Deseja continuar? (S/N)').toUpperCase();

    cont++;

}while(duvida !== "N");

console.log(`O total é ${soma}`);
