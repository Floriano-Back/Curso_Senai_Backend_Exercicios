const prompt = require('prompt-sync')();
let notas = [], somaNotas = 0;

for(let Cont = 0; Cont <= 5; Cont++)
{
    notas[Cont] = Number(prompt("Digite sua nota:"));
    somaNotas = notas[Cont] + somaNotas;
}

let numeroDeNotas = (notas.length);

let media = somaNotas / numeroDeNotas;

console.log(`Sua média foi: ${media}`);

