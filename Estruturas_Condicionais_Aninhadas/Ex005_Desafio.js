const prompt = require("prompt-sync")();
let salarioLiquido = 0, imposto;

let salarioBruto = Number(prompt('Digite seu salário:'));

if(salarioBruto >= 5000)
{
    imposto = salarioBruto * 0.20; 
    salarioLiquido = salarioBruto - imposto;
    console.log(`Seu salário bruto é: R$${salarioBruto}\nValor descontado é R$${imposto}\nSeu salário liquido é R$${salarioLiquido}`);
}

else if (salarioBruto >= 3500.01 && salarioBruto <=5000)
{
    Imposto = salarioBruto * 0.15; 
    salarioLiquido = salarioBruto - Imposto;
    console.log(`Seu salário bruto é: R$${salarioBruto}\nValor descontado é R$${imposto}\nSeu salário liquido é R$${salarioLiquido}`);
}

else if(salarioBruto >= 2000.01 && salarioBruto <=3500)
{
    Imposto = salarioBruto * 0.10; 
    salarioLiquido = salarioBruto - imposto;
    console.log(`Seu salário bruto é: R$${salarioBruto}\nValor descontado é R$${imposto}\nSeu salário liquido é R$${salarioLiquido}`);
}

else
{
    console.log(`Seu salário bruto é: R$${salarioBruto}\nNão paga imposto!`);
}