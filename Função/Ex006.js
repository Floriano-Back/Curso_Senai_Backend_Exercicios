const prompt = require("prompt-sync")();
let num = [];
let mediaFinal = 0, soma = 0;

function media(n1, n2, n3) {
  if (n1 >= 0 && n1 <= 10 || n2 >= 0 && n2 <= 10 || n3 >= 0 && n3 <= 10){
    soma = n1 + n2 + n3;
    return (mediaFinal = soma / 3);
  }else{
    return 0;
  }
}

for (let i = 0; i <= 2; i++) {
  num[i] = Number(prompt("Digite sua notas:"));
}

console.log(media(num[0], num[1], num[2]).toFixed(2));