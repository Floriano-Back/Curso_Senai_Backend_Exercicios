const prompt = require('prompt-sync')();

let nomeProdutos = prompt('Informe o nome do produto:');
let quantidadeProdutos = Number(prompt('Informe a quantidade do produto:'));
let valorUnitario = Number(prompt('Informe o valor unitario:'));
let valorTotal = quantidadeProdutos * valorUnitario;

console.log(`Produto: ${nomeProdutos}. \nQuantidade: ${quantidadeProdutos}. \nValor unitario: R$${valorUnitario}. \nValor Total: R$${valorTotal}.`);

let pagamentoCliente = Number(prompt('Digite com quanto vai pagar \n'));
let trocoCliente = pagamentoCliente - valorTotal;

console.log(`O seu troco é de R$${trocoCliente}`);