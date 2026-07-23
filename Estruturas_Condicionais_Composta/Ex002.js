const prompt = require("prompt-sync")();

let valorGasto = Number(prompt('Digite o valor que gastou na loja:'));
let vip = prompt('Você possui o VIP em nossa loja?').toUpperCase();

if (valorGasto >= 500 || vip === "S")
{
    console.log(`Você tera um desconto de 20%, que fica R$${valorGasto - (valorGasto * 0.20)}`);
}

else if (valorGasto >= 200 || vip === "S")
{
    console.log(`Você tera um desconto de 10%, que fica R$${valorGasto -(valorGasto * 0.10)}`);
}

else if (valorGasto >= 100 || vip === "S")
{
    console.log(`Você tera um desconto de 5%, que fica R$${valorGasto -(valorGasto * 0.05)}`);
}

else
{
    console.log(`Você não tera um desconto`)
}