var http_prefix = "https://";
function solicita_redireccion() {
    var url = prompt("Introduce la url");
    //Comprobar si metes https://
    if (url.indexOf(http_prefix) == -1) {
        url = http_prefix + url;
    }
    window.location.assign(url);
}
