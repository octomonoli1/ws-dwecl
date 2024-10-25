function ir() {
    var url = document.getElementById("url").value;
    //Validar la URL
    var expReg = new RegExp("^https://www.[a-z.-/?=0-9]");
    if (expReg.test(url)) {
        window.location.assign(url);
    }
    else {
        console.error("URL Introducida no valida");
    }
}
