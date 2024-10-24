var name = prompt("Introduce tu nombre: ");
var lastname1 = prompt("Introduce tu primer apellido: ");
var lastname2 = prompt("Introduce tu segundo apellido: ");
var edad = prompt("Introduce tu edad: ");

var nick = (lastname2.charAt(0)
    + lastname1.charAt(0) 
    + name.charAt(0)
    + edad).toUpperCase();

console.log(nick);
