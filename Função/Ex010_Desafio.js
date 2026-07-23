const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número:'));

const contador = (num) =>{
    if (num < 0){
        return "Fim da contagem!";
    }
console.log(num);
contador(num-1);
}

console.log(contador(numero));