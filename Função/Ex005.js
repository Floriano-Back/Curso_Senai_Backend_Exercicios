const prompt = require('prompt-sync')();

function numeroDobro(num)
{
    return num * 2;
}

console.log(numeroDobro(Number(prompt('Digite um número:'))));
