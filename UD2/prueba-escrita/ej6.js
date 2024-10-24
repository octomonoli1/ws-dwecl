var palabras = "abcdefghijklmnopqrstuvwxyz1234567890()/=*#?";
var longitud = prompt("Introduce el numero de caracteres: ");
var pass = "";

for(let i = 0; i < longitud - 1; i ++){
    let pos_aleatoria = Math.round(Math.random() * palabras.length);
    pass += palabras[pos_aleatoria];
}

console.log("La contraseña generada es: " + pass);