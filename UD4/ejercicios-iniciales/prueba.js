let alumnos = ["Paco","Maria","Lucía","Sandra","Juan"];
let lista = document.createElement("ul");

alumnos.forEach((alumno) => {
    let elemento = document.createElement("li");
    elemento.textContent = alumno;
    lista.appendChild(elemento);
});

window.onload = () => document.body.appendChild(lista);

let notas = new Array(10,9,4,2,0,1,8);
let media = 0;
notas.forEach((nota) => {
    media += nota;
});

console.log("La media es " + Math.round(media/notas.length));

//Array como pila (platos en el fregadero o LIFO)
console.log(notas);
notas.push(5);
console.log(notas);
notas.pop();
console.log(notas);

//Array como cola (fila en el supermercado o FIFO)
console.log(notas);
notas.push(9);
console.log(notas);
notas.splice(0,1);
console.log(notas);

let notasExtraordinarias = [1,2,7,9,8,5,9,10];
let notasCompletas = notas.concat(notasExtraordinarias);
console.log("Notas finales: "  +  notasCompletas);

//Eliminar los suspendos
let aprobados = notasCompletas.filter((element) => {
    element >= 5
});

console.log(aprobados);

//Copiando arrays:
let copia1 = notasCompletas.slice(); //Copia completa
console.log(notasCompletas);
console.log(copia1);

copia1.pop();
console.log(notasCompletas);
console.log(copia1);

let copia2 = notasCompletas.slice(0,4); //Copia subarray (rango)
console.log(notasCompletas);
console.log(copia2);

let array = [1,2,3,4,5];
console.log(array);
array.splice(2,1,'a','b','c','d');
console.log(array);

function search(){
    var nombre = prompt("Introduce el alumno a buscar");
    if(alumnos.indexOf(nombre) >= 0){
        alert("El alumno existe");
    }else{
        alert("No se ha podido encontrar al alumno");
    }
}

notasCompletas.sort();
console.log(notasCompletas);