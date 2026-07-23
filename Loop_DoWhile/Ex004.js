const prompt = require('prompt-sync')();
let nota = 0;

do
{
    nota = Number(prompt('Digite sua nota:'));
}while(nota <=0);

console.log("Fim");