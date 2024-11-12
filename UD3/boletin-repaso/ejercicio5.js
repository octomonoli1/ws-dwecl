//Crea un campo html con un listado de elementos (selector)
//cuando selecciones un dato, almacenalo en una cookie.
//al abrir de nuevo la página, intenta recuperar el valor 
//de la cookie en lugar del valor por defecto.
function guarda_cookie(){
    let valor = document.getElementById("marcas").value;
    console.log(valor);
    document.cookie="marca=" + valor;
}

window.onload = () => {
    let marcaElegida = document.cookie.split(";");
    let valor = marcaElegida[0].split("=")[1];
    document.getElementById("marcas").value = valor;
}