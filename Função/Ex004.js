const prompt = require('prompt-sync')();
let numero;

function verificar_numero(num)
{
    if(num > 0)
    {
        return "Postivo";
    }

    else if (num === 0)
    {
        return "Zero";
    }

    else
    {
        return "Negativo";
    }
}

console.log(verificar_numero(numero = Number(prompt('Digite um número:'))));
