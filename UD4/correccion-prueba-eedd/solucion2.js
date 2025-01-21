//Ejercicio 1
const TAM = 100; //Esto es el tamaño del array
let numAleat = new Array();

for(let i = 0; i < TAM ; i ++){
    numAleat.push(Math.round(Math.random()*50));
}

console.log(numAleat);

//1.a. Crea una copia del array solo con aquellos elementos pares.
let copia = numAleat.filter(elem => elem%2==0);

//Metodo clasico
let copia2 = new Array();

for(let i = 0; i < numAleat.length; i++){
    if(numAleat[i]%2 == 0){
        copia2.push(numAleat[i]);
    }
}

//Muestra por consola un mensaje del tipo "Pintando el emento i: N"
numAleat.forEach((data,idx) => {
    console.log("Pintando el elemento " + idx + ": " + data);
})

for(let i = 0; i < numAleat.length; i++){
    console.log("Pintando el elemento " + i + ": " + numAleat[i]);
}

//Sustituye los ultimos diez valores por cero
numAleat.splice(TAM-10, 10, 0);

//Crea una matriz 3x3
const TAM_M = 3;
let matrizPares = [];
let numPar = 0;

for(let i = 0 ; i < TAM_M; i ++){
    let arrayPares = [];
    for(let j = 0; j < TAM_M; j++){
        numPar += 2;
        arrayPares[j] = numPar;
    }
    matrizPares[i] = arrayPares;
}

for(let i = 0; i < matrizPares.length; i ++){
    for(let j = 0 ; j < matrizPares[i].length; j++){
        console.log(matrizPares[i][j]*2); 
    }
}

matrizPares.forEach(data => {
    data.forEach(data2 => console.log(data2*2));
})

let comidas = ["pizza","hamburguesa","kebab","pringaita","pizza"];
let setComidas = new Set(comidas);
comidas = [...setComidas];