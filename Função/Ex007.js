const prompt = require('prompt-sync')();
let numeros =[];

for(let i = 0; i <= 2; i++){
   numeros[i] = Number(prompt('Digite alguns números:'));
}

function maior_numero(myArray){

    if (myArray[0] === myArray[1] || myArray[0] === myArray[2] || myArray[1] === myArray[2]){
        return "Os dois números digitados são iguais";
    }
    else{
        return Math.max(...numeros);
    }
        
}

console.log(maior_numero(numeros));
