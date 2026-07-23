const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número:'));

const contador = (num) =>{
    if (num === 0 || num ===1){
        return 1;
    }
return num * contador(num-1);
}

console.log(contador(numero));