let fechaActual: Date = new Date();

let meses: string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

window.alert("Hola usuario la fecha actual es: " 
    + fechaActual.getDate() + " de " + meses[fechaActual.getMonth()] + " de " + fechaActual.getFullYear());

console.log("La hora de antes es: " + (fechaActual.getHours() - 1) + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds());
console.log("La hora de despues es: " + (fechaActual.getHours() + 1) + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds());