window.onload = () => {
    let spanClick = document.getElementById("span_clickeable");
    let contador = 0;
    spanClick.addEventListener("click", event => {
        contador++;
        console.log(contador);
        console.log(event);
    });
};
/* Realizar un programa que cuente el número de clicks que hace un 
usuario sobre una  etiqueta concreta en HTML, por ejemplo un <span> */

/* let contador = 0;

function contar_click(){
    contador++;
    console.log(contador);
} */

/* Versión con addEvent Listener */
