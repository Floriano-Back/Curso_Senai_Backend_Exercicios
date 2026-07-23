const prompt = require("prompt-sync")();
let numeros = [];

const potencia = (a,b) => {
  return a ** b;
};

console.log("--Escolha a operação--");
console.log("Soma(+)\nSubtração(-)\nMultiplicação(*)\nDivisão(/)\nPotencia(^)");
let operacao = prompt();

for (let i = 0; i <= 1; i++) {
  numeros[i] = Number(prompt("Digite alguns números:"));
}

function calculadora(escolha, a, b) {
  switch (escolha) {
    case "+":
      return a + b;
      break;

    case "-":
      return a - b;
      break;

    case "*":
      return a * b;
      break;

    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        return "Não é possivel dividir por 0";
      }
      break;

    case "^":
      return potencia(a,b);
      break;

    default:
      return "Opção invalida";
      break;
  }
}

console.log(calculadora(operacao, numeros[0], numeros[1]));
