const prompt = require('prompt-sync')();
let name;

function menssagemSaudacao(nome)
{
    return `Olá ${nome}! Bem-vindo!`;
}

console.log(menssagemSaudacao(name = prompt('Digite seu nome:')));
