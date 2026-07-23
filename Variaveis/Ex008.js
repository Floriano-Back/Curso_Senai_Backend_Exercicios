const prompt = require('prompt-sync')();

let celsius = Number(prompt('Digite a temperatura:'));
let fahrenheit = (celsius * (9/5)) + 32;

console.log(`A temperatura ${celsius}°C em Fahrenheit ${fahrenheit}°F`);