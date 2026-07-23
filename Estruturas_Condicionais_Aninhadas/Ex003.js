const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a sua nota:"));

if (nota >= 9) {
  console.log("Excelente");
} else if (Nota >= 7) {
  console.log("Bom");
} else if (Nota >= 6) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}
