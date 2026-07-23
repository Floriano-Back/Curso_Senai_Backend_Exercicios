const prompt = require("prompt-sync")();
let cont = 0, par = 0;

while(cont <=100)
{
    if(cont % 2 ==0)
    {
        par = cont;
        console.log(par)
    }
    cont++;
}

console.log('FIM');

