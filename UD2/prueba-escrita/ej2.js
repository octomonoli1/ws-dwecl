var edad = prompt("Introduce la edad de tu compañero");

function pide_edad(){
    let edad = prompt("Introduce tu edad: ");

    if(window.edad > edad){
        console.log("Eres menor que tu compañero");
    }else if(window.edad < edad){
        console.log("Eres mayor que tu compañero");
    }else{
        console.log("Eres igual que tu compañero");
    }
}

pide_edad();