const prompt = require('prompt-sync')();
let Resultado = 1;
let numeroFatorial = Number(prompt('Digite um número para realizar o fatorial dele:'));

for(let Cont = numeroFatorial; Cont >= 1; Cont--)
{
    console.log(Cont);
    Resultado = Cont * Resultado;
    
}

console.log(`${numeroFatorial}!= ${Resultado}`);