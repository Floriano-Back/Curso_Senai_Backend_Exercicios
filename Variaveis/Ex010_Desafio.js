const prompt = require("prompt-sync")();

let horasTrabalhadas = Number(prompt("Digite quantas horas você trabalha:"));
let salarioHora = Number(prompt("Digite seu salario por hora:"));

let salarioBruto = horasTrabalhadas * salarioHora;
let inss = salarioBruto * 0.11;
let impostoRenda = salarioBruto * 0.08;
let sindicato = salarioBruto * 0.05;
let salarioLuquido = salarioBruto - (inss + impostoRenda + sindicato);

console.log(`O seu salario bruto é: R$${salarioBruto}.\nO desconto do INSS é: R$${inss}.\nO desconto do Imposto de renda é: R$${impostoRenda}\nO desconto do Sindicato é: R$${sindicato}\nO salário liquido é: R$${salarioLuquido}`,
);
