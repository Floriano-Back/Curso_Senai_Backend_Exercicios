const prompt = require("prompt-sync")();

let n1 = Number(prompt('Digite sua nota:'));
let n2 = Number(prompt('Digite sua nota:'));
let media = (N1+N2)/2;

if (media>=7)
{
    console.log(`Aluno aprovado! Sua media foi ${media}`);
}

else
{
    console.log(`Aluno reprovado! Sua media foi ${media}`);
}