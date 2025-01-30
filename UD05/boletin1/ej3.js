/* Escribe un programa que permita conocer la posición que ocupaba 
el ratón cuando hagas click en cualquier parte del documento */
window.onload = () => {
    document.body.addEventListener("click", event => {
        console.log("Has pulsado en las coordenadas (" + 
            event.clientX + " , " + event.clientY + ")");
    });
};