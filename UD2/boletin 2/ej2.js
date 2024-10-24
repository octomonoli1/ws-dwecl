var dias = prompt("Introduce el numero de días a calcular: ");

var horas = (dias * 24).toFixed(2);

var horasReales = Math.floor(horas);
var restoHoras = horas - horasReales;

var minutos = (restoHoras * 60).toFixed(2);

var minutosReales = Math.floor(restoHoras * 60);
var restoMinutos = minutos - minutosReales;

var segundos = (restoMinutos * 60);

var segundosReales = Math.floor(restoMinutos * 60);

alert(dias + " dias son " + horasReales + " horas " + minutosReales + " minutos y " + segundosReales + " segundos.");