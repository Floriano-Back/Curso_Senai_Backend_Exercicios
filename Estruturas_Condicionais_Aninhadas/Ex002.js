const prompt = require("prompt-sync")();

let temp = Number(prompt("Digite a temperatura do ambiente:"));

if (temp < 20) {
  console.log("Está frio");
} else if (temp >= 20 && temp <= 30) {
  console.log("Está agradavel");
} else {
  console.log("Está quente");
}
