const http_prefix = "https://";
function solicita_redireccion(){
    var url: string = prompt("Introduce la url") as string;

    //OPC1: Comprobar si metes https://
    if(url.indexOf(http_prefix) == -1){
        url = http_prefix + url;
    }

    //OPC2:  Opcion con expresión regular
    let regExp = new RegExp("^https://.");
    if(regExp.test(url)){
        url = http_prefix + url;
    }

    window.location.assign(url);
    //window.location.href = url;
}