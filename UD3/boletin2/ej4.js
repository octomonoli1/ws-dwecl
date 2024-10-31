function init() {
    var body = window.document.getElementsByTagName("body")[0];
    var opc = prompt("Introduce una opción");
    switch (opc) {
        case "1":
            body.style.backgroundColor = "red";
            break;
        case "2":
            body.style.backgroundColor = "blue";
            break;
        case "3":
            body.style.backgroundColor = "green";
            break;
        default:
            console.error("Opción no válida");
            break;
    }
}
