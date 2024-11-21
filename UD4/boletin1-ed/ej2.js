
let notas = [10,6,3,5,9,10,0,4,6,5];
console.log(notas);

notas.sort((start,end) => end-start); //Orden descendente
console.log("Nota mayor: " + notas[0]);

notas.sort((start,end) => start-end) //Orden ascendente
console.log("Nota menor: " + notas[0]);

//Metodo clasico (asi NO)
let mayor = 0;
for(let i = 0; i < notas.length -1; i++){
    if(mayor < notas[i]){
        mayor = notas[i];
    }
}
console.log("La nota mayor es: " + mayor);