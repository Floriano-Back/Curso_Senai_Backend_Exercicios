prompt = require("prompt-sync")();

let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));

function calcular_imc(a, b) {
  let calculoImc = a / (b ** 2);
  console.log(`Seu IMC é: ${calculoImc.toFixed(1)}`);      
  if (calculoImc <= 18.5) {
    return "Abaixo do peso!";
  } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
    return "Peso normal!";
  } else if (calculoImc >= 25 && calculoImc <= 29.9) {
    return "Sobrepeso!";
  } else {
    return "Obesidade!";
  }
}

console.log(calcular_imc(peso, altura));
