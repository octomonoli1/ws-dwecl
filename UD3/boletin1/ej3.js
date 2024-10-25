var porc_redimension = prompt("Introduce el porcentaje de redimension ");
var cambiar = confirm("Desea confirmar los cambios?");
if (cambiar) {
    var porcentaje = porc_redimension != null ? parseInt(porc_redimension) : 100;
    var ancho = window.innerWidth - (window.innerWidth * (porcentaje / 100));
    var alto = window.innerWidth - (window.innerHeight * (porcentaje / 100));
    window.resizeTo(ancho, alto);
    console.log("Cambiando altura de " + window.innerHeight + " a " + alto);
    console.log("Cambiando anchura de " + window.innerWidth + " a " + ancho);
}
else {
    console.log("No hacemos nada");
}
