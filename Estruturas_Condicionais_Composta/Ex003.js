const prompt = require("prompt-sync")();

let nota1 = Number(prompt('Digite sua primeira nota:'));
let nota2 = Number(prompt('Digite sua segunda nota:'));
let frequecia = Number(prompt('Digite sua frequencia:'));

let media = (nota1+nota2)/2;

if(media >= 6 && frequecia <= 75)
{
    console.log("Aluno aprovado");
}

else
{
    console.log("Aluno reprovado");
}


