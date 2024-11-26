const TAM = 3;
let arrayPpal = new Array(TAM);

for(let i = 0; i < arrayPpal.length; i++){
    let array = new Array(TAM);
    for(let j = 0 ; j < array.length; j++){
        array[j] = Math.round(Math.random() * 9);
    }
    arrayPpal[i] = array;
}

console.log(arrayPpal);
console.log()