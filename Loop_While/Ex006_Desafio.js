let par = 0; impar = 0; cont = 0;

while(cont <=100)
{
    if(cont % 2==0)
    {
        par = cont + par;
    }

    else
    {
        impar = cont + impar;
    }

    cont++;
}

console.log(`A soma de todos os números pares entre 1 e 100 = ${par}`);
console.log(`A soma de todos os números ímpares entre 1 e 100 = ${impar}`);