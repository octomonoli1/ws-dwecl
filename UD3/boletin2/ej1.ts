console.log(window);

//Métodos
window.alert("Muestra mensaje por ventana de alerta");

let msg = window.atob("Codifica este mensaje y lo almacena en la variable de retorno msg");
console.log(msg); 

let msgOrig = window.btoa("Decodifica el mensaje codificado msg y lo almacena en la variable de retorno msgOrig");
console.log(msgOrig);

let ventana = window.open("https://www.url_de_una_ventana_nueva");

window.close(); //Cierra la ventana actual


//Propiedades u Objetos
window.document; //Contiene todo el DOM. Si lo pintamos por consola muestra todo el HTML

window.innerHeight; // Muestra la altura de la ventana abierta

window.innerWidth; // Muestra la anchura de la ventana abierta

window.onload = function(){return "Almacena la accion a realizar una vez cargada la página"}

window.origin; //Almacena la URL raíz de la web donde estas.