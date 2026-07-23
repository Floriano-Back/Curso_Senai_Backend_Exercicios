const prompt = require('prompt-sync')();

let idadeUsuario = Number(prompt('Digite a sua idade:'));

if(idadeUsuario >= 18){
    console.log('Você é maior de idade!');
}

else{
    console.log('Você é menor de idade!');
}