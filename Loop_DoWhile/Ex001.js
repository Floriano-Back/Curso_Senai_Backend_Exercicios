const prompt = require('prompt-sync')();
let senha;

do
{
    senha = Number(prompt('Digite a sua senha:'));

} while (senha !== 1234);

console.log('Senha correta!!')