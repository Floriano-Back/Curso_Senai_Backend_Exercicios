const prompt = require('prompt-sync')();
let Cont;
let numeroInicial = Number(prompt("Digite um número para começar:"));
let numeroFinal = Number(prompt("Digite um número para finalizar:"));

for(Cont = numeroInicial; Cont <= numeroFinal; Cont++)
{
    console.log(Cont);
}

console.log("Fim");