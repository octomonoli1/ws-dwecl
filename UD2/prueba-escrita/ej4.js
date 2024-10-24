var dado = Math.floor(Math.random()*6) + 1;
var texto = null;

switch(dado){
    case 1: 
        texto = "uno";
        break;
    case 2:
        texto = "dos";
        break;
    case 3: 
        texto = "tres";
        break;
    case 4: 
        texto = "cuatro";
        break;
    case 5:
        texto = "cinco";
        break;
    case 6:
        texto = "seis";
        break;
    default:
        console.error("Se ha obtenido un valor incorrecto");
        break;
}

console.log("Has obtenido un " + texto);