/* Realiza un programa que, al pulsar sobre un elemento del tipo 
<span>, que se encuentra dentro de un párrafo <p> y éste, a su vez, 
dentro de un elemento de tipo <section> muestre en orden natural la 
propagación de eventos. Modifica el código anterior para que realice 
la propagación inversa. */

window.onload = () =>{
    let section = document.getElementsByTagName("section")[0];
    let p = document.getElementsByTagName("p")[0];
    let span = document.getElementsByTagName("span")[0];

    section.addEventListener("click", event =>{
        console.log("<section>: Capturando evento");
    });

    p.addEventListener("click", event =>{
        console.log("<p>: Capturando evento");
    });

    span.addEventListener("click", event =>{
        console.log("<span>: Capturando evento");
    });

    //EXTRA: entrenando con la cancelación de un evento
    let a = document.getElementsByTagName("a")[0];
    a.addEventListener("click", event => {
        console.log("Capturando el evento del enlace");
        event.preventDefault();
    }); 
}
