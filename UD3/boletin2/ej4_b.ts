function init_b(){

    let colors: string[] = ["red", "blue", "green"];
    let opc = prompt("Introduce una opción") as string;
    let color: string = colors[parseInt(opc)-1];
    window.document.body.style.backgroundColor = color;
    
}