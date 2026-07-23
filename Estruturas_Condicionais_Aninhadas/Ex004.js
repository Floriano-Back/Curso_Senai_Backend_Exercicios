const prompt = require("prompt-sync")();
let valorComprado = Number(prompt('Digite o valro que você gastou:'));

if(valorComprado >= 500)
{
    console.log(`Você tem um desconto de 20% R$${valorComprado-(valorComprado*0.20)}`);
}

else if (valorComprado >= 200)
{
    console.log(`Você tem um desconto de 10% R$${valorComprado-(valorComprado*0.10)}`);
}

else if(valorComprado >=100)
{
    console.log(`Você tem um disconte de 5% R$${valorComprado-(valorComprado*0.05)}`);
}

else
{
    console.log('Não tem disconto');
}