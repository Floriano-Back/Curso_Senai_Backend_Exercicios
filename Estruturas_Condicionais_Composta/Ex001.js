const prompt = require("prompt-sync")();

let idade = Number(prompt('Digite sua idade:'));
let ingresso = prompt('Você possui o ingresso? (S/N)').toUpperCase();

if(idade >= 18 && ingresso === "S")
{
    console.log("Entrada permitida!");
}

else
{
    console.log("Entrada negada!");
}