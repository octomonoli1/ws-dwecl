//Iniciamos todas las variables
var opc = null;
var numero = null;
var maximo = null;
var minimo = null;
var media = null;
var contador = 0;

do{
    opc = prompt("Introduzca una de las siguientes opciones \n"
        + "a. Introduce un nuevo número.\n"
        + "b. Calcula el máximo. \n"
        + "c. Calcula el mínimo. \n"
        + "d. Calcua la media. \n"
        + "e. Salir"
    );

    switch(opc){
        case 'a':
            //Pide el valor numerico
            numero = parseInt(prompt("Introduce el número: "));
            contador++;

            //Actualiza el resto de valores
            if(maximo == null || numero > maximo){
                maximo = numero;
            }

            if(minimo == null || numero < minimo){
                minimo = numero;
            }

            if(media == null){
                media = numero;
            }else{
                media = (media + numero) / contador;
            }
            break;
        case 'b':
            console.log("El máximo es " + maximo);
            break;
        case 'c':
            console.log("El mínimo es " + minimo);
            break;
        case 'd': 
            console.log("La media es "+ media);
            break;
        case 'e':
            console.log("Salir del programa");
            break;
        default:
            console.error("Introduce un valor correcto");
            break;
    }

    console.log("La opción introducida es: " + opc);
}while(opc != 'e');


