const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade:"));

if (idade <= 11) {
  console.log("Criança");
  
} 
else if (idade >= 12 && idade <= 17) {
  console.log("Adolescente");
} 
else {
  console.log("Adulto");
}
