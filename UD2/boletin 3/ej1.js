var num = prompt("Introduzca un numero");

if(!isNaN(num)){
    console.log("Numero correcto"); 
    //Metodo 1
    //console.log("El numero tiene " + num.length + " cifras");
    //Metodo 2 (El que realmente pido en el ej.)
    var cifras = 0;
    while(num >= 1){
        cifras ++;
        num = num/10;
    }
    
    console.log("El numero tiene " + cifras + " cifras");
}else{
    console.error("Debe ser un valor numérico");
}