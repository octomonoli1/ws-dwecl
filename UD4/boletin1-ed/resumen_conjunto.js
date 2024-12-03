let dias = new Set();
dias.add("Lunes");
dias.add("Martes");
dias.add("Miercoles");
dias.add("Jueves");
dias.add("Viernes");
dias.add("Sabado");
dias.add("Domingo");

dias.delete("Martes");
dias.delete("Miercoles");

console.log(dias);

// Vacía el conjunto: dias.clear();
// Muestra el tamaño: console.log(dias.size);

//Busca dentro del conjunto
console.log(dias.has("Pepito"));

//Convertir conjunto en array
//Sin spread (asi no podemos)
let arrayDias1 = new Array(dias);
console.log("Sin spread: " + arrayDias1)
//Con spread 
let arrayDias2 = new Array(...dias);
console.log("Con spread: " + arrayDias2);

//Convertir array en conjunto
let array = ["A","B","C"];
let conjuntoArray = new Set(array);
console.log(conjuntoArray);


//Union de conjuntos
let mediaSemana = new Set();
mediaSemana.add("Lunes");
mediaSemana.add("Martes");
mediaSemana.add("Miercoles");

let laOtraMedia = new Set();
laOtraMedia.add("Jueves");
laOtraMedia.add("Viernes");
laOtraMedia.add("Sabado");
laOtraMedia.add("Domingo");

let semanaCompleta = new Set([...mediaSemana, ...laOtraMedia]);
console.log(semanaCompleta);

//Recorrido
let cont = 0;
semanaCompleta.forEach((day,idx) => {
    console.log("Dia " + cont + ": " + day);
    cont++;
});