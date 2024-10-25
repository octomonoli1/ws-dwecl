var porc_redimension: string | null = prompt("Introduce el porcentaje de redimension ");

var cambiar: boolean = confirm("Desea confirmar los cambios?");

if(cambiar){
    let porcentaje = porc_redimension != null? parseInt(porc_redimension) : 100;

    let ancho = window.innerWidth - (window.innerWidth * (porcentaje/100));
    let alto = window.innerWidth - (window.innerHeight * (porcentaje/100));

    window.resizeTo(ancho, alto);

    console.log("Cambiando altura de " + window.innerHeight + " a " + alto);
    console.log("Cambiando anchura de " + window.innerWidth + " a " + ancho);
}else{
    console.log("No hacemos nada");
}