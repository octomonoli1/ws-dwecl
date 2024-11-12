//Solicita por pantallka una cadena/textoi y muestra un menu para pintar:
//1. Todo en mayúsculas
//2. Todo en minusculas
//3. La cadena invertida
//4. Cambias las A por E
//5. Busca si contiene una letra en concreto

var texto = prompt("Dime algo");
var salir = false;
function mostrar_menu(){
    return window.prompt("Elige la opción para trabajar con el texto"
        + "\n1. Transforma a mayúsculas"
        + "\n2. Transforma a minusculas"
        + "\n3. Dale la vuelta"
        + "\n4. Cambia las A por las E"
        + "\n5. Busca si contiene una letra o palabra"
        + "\n6. Salir"
    );
}

do{
    
    let opc = mostrar_menu();
    switch(opc){
        case "1": 
            console.log(texto.toUpperCase());
            break;
        case "2":
            console.log(texto.toLowerCase()); 
            break;
        case "3":
            console.log(texto.split("").reverse().join(""));
            break;
        case "4": 
            console.log(texto.replace('a','e'));
            break;
        case "5": 
            let letra_buscar = window.prompt("Busca una letra");
            if(texto.indexOf(letra_buscar) != -1){
                console.log(letra_buscar + " existe dentro del texto");
            }else{
                console.log(letra_buscar + " no existe dentro del texto");
            }
            break;
        case "6": 
            salir = true;
            break;
        default:
            console.error("Introduce una opción valida");
            break;
    }
}while(!salir);
