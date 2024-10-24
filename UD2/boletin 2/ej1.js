// Opción I do-while
var num = prompt("Introduce un número");
var result = 1;
var factorial = num;

do{
    result *= (num);
    num--;
}while(num > 1);

alert("El resultado de " + factorial + "! es: " + result);

//Opción II do-while
var num = prompt("Introduce un número");
var contador = 1;
var factorial = 1;

do{
    factorial *= contador;
    contador ++;
}while(contador <= num);

alert("El resultado de " + num + "! es: " + factorial);

//Opción 3 for
var num = prompt("Introduce un número");
var result = 1;

for(let i = 1; i <= num; i++){
    result *=i;
}

alert("El resultado de " + num + "! es: " + result);