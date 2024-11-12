//EJ1. Crea un ejercicio en javasript que muestre por consola la fecha en 
//dos formatos:
//1. Formato numerico (12/11/2021 09:41)
//2. Formato texto (12 de Noviembre de 2024 a las 09:41)
var date = new Date();
var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Formato numerico: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes());
console.log("Formato texto: " + days[(date.getDay() - 1)] + " " + date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear() + " a las " + date.getHours() + ":" + date.getMinutes());