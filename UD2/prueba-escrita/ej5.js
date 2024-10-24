var valor = null;
var num_intentos = 0;
do{
    valor = prompt("Introduce un valor: ");
    num_intentos ++;
    if(isNaN(parseInt(valor))){
        console.error("Has introducido un valor no numérico");
    }
}while(isNaN(valor));

console.log("Has realizado " + num_intentos + " intentos");