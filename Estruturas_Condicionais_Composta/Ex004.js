let prompt = require("prompt-sync")();
let carteira;
let acompanhado;

let idade = Number(prompt('DIgite sua idade:'));

if(idade >= 18)
{
    carteira = prompt('Você tem carteira de habilitação? (S/N)').toUpperCase();

    if(carteira === "S")
    {
        console.log("Pode dirigir!");
    }
    else
    {
    acompanhado = prompt('Você esta acompanhando? (S/N)').toUpperCase();

    if(acompanhado === "S")
    {
        console.log('Pode dirigir!');
    }

    else
    {
        console.log('Não pode dirigir!');
    }
    }
}
else
{
    console.log('Não pode dirigir!');
}
   