//Ejercicio 1

const TAM = 100;
let numAleat = new Array();

for(let i = 0; i < TAM; i++){
    numAleat.push(Math.round(Math.random() * 50));
}

console.log(numAleat);

//Crea una copia con aquellos elementos pares
let copia = 
    numAleat.filter(num => num%2 == 0);

//Solucion sin callback
let copia2 = [];
for(let i = 0; i < numAleat.length; i++){
    if(numAleat[i] %2 == 0){
        copia2.push(numAleat[i]);
    }
}

//Muestra por consola un mensaje del tipo: “Pintando el elemento i: N” dónde i sea el índice que ocupa y N sea el valor numérico en dicho índice.
numAleat.forEach((data, idx) => { 
    console.log("Pintando el elemento " + idx + ": " + data);
});

//Solucion sin callback
for(let i = 0; i < numAleat.length; i++){
    console.log("Pintando el elemento " + i + ": " + numAleat[i]);
}

//Sustituye los últimos diez valores por un 0.
numAleat.splice(TAM - 10, 10, 0);
console.log(numAleat);

//Ejercicio 2
let TAM_M = 3;
let matrizPares = [];
let num = 0;
for(let i = 0; i < TAM_M; i++){
    let arrayPares = [];
    for(let j = 0; j < TAM_M; j++){
        num += 2;
        arrayPares[j] = num;
    }
    matrizPares[i] = arrayPares;
}

console.log(matrizPares);

//Pintar doble matriz
matrizPares.forEach(data => {
    data.forEach(num => {console.log(num*2)})
});

//Crea una lista con tus 5 comidas favoritas y, suponiendo que existen duplicados dentro de dicha lista, elimínalos. 
let arrayComidas = ["pizza","hamburguesa","kebab","pringaita","pizza"];
let setComidas = new Set(arrayComidas);
arrayComidas = [...setComidas];

//Crea un listín de correos electrónicos para cinco compañeros de clase. Recuerda que para tí es fácil recordar su nombre pero difícil recordar su email. Posteriormente debes eliminar uno de ellos. El que tú quieras.

let listin = new Map();

listin
    .set("Ana","ana@example.com")
    .set("Juan","juan@example.com")
    .set("Luis","luis@example.com")
    .set("Carlos","carlos@example.com")
    .set("Luisa","luisa@example.com");

listin.delete("Luis");