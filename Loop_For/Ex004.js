const prompt = require('prompt-sync')();
let infeite1 = '--- TABUADA ---'
let infeite2 = '--- FIM ---'

let tabuada = Number(prompt('Digite um número para ver a tabuada dele:'));

console.log(infeite1);

for(let cont = 0; cont <=10; cont++)
{
    console.log(`${tabuada} x ${cont} = ${cont* tabuada}`);
}

console.log(infeite2);