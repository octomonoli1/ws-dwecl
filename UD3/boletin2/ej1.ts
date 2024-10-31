console.log(window);

//Métodos
window.alert("Muestra mensaje por ventana de alerta");

window.confirm("Muestr auna alerta con botón de confirmación");

window.prompt("Pide un valor de entrada al usuario a través de una ventana de alerta");

//window.find("texto","busca en un array");

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

window.location; //Te da la URL actual

window.length; //Numero de frames que tiene la ventana

window.history; //Para manejar el historial del navegador

window.outerWidth; //Anchura completa del navegador

window.outerHeight; //Altura completa del navegador
