

function promedio(num1,num2){
    return num1/num2;
}






let edad=parseFloat(prompt("ingrese edad, para terminar -1"))

suma=0;
cont=0;
total=0;


while( edad!=-1){


suma=suma+edad
cont=cont+1
total= promedio(suma,cont);

edad=parseFloat(prompt("ingrese edad, para terminar -1"))

}

console.log("la edad promedia es "+ total)