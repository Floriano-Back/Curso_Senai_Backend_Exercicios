
const prompt = require("prompt-sync")();
let correto = "z";

let letra = prompt("Digite uma letra:").toLowerCase();
let teste = correto === letra;

if (teste)
{
    console.log('Letra correta!');
}
else
{
    console.log('Letra incorreta!');
}