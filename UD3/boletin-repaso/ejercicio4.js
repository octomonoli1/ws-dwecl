//Crea un formulario con un campo de texto que solicte
//URLS, si la URL contiene el http:// navega y si no
//no navega y añade esta al listado "Intentos"
let lista = document.createElement("ul");

function navegar(){
    let url = document.getElementById("url").value;
    if(url.indexOf("https://") != -1){
        window.location.assign(url);
    }else{
        let item = document.createElement("li");
        item.textContent = url;
        lista.appendChild(item);
    }

    document.getElementById("contenedor").appendChild(lista);
}