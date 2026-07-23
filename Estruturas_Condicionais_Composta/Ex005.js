const prompt = require("prompt-sync")();

let letras = prompt('Digite uma letra:').toUpperCase();

if(["A","E","I","O","U"].includes(letras))
{
    console.log(`${letras}, É vogal!`);
}

else
{
    console.log(`${letras}, Não é vogal!`);
}