//Chama a biblioteca para requisitar e guardar dados, passado pelo usuario.
const prompt = require("prompt-sync")();
//Decla as variaveis que vão ser utilizadas posteriormente no codigo.
let Resultado = 1;
let numeroFatorial;

//do = serve para realizar a primeira execução do loop e o while no final para testar se uma condição é verdadeira para continuar o loop.
do
{
    numeroFatorial = Number(prompt("Digite um número para realizar o fatorial dele:"));
//faz o teste logico se o número digitado é maior que 0.
    if (numeroFatorial >= 0) {
    for (let Cont = numeroFatorial; Cont >= 1; Cont--) {
        console.log(Cont);
        Resultado = Cont * Resultado;
        }

    console.log(`${numeroFatorial}!= ${Resultado}`);
    break;
    } else {
    console.log("Não existe fatorial de número negativo!");
    }

}while(numeroFatorial <= 0);

console.log("Fim");
