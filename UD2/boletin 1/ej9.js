{
    /*El ámbito de la variable var1 es exclusivo al bloque de código
    sin embargo var2 puede ser consultada desde fuera*/
    let var1 = "Valor 1"; 
    var var2 = "Valor 2";

    console.log("Variable 1: " + var1);
    console.log("Variable 2: " + var2);

    /*en este subloque al ser de un ámbito inferior al bloque principal
    var1 sigue manteniendo su valor. Solo lo pierdes si salimos del bloque
    */
    {
        console.log("Variable 1: " + var1);
        console.log("Variable 2: " + var2);
    }

}

//console.log("Variable 1: " + var1);
console.log("Variable 2: " + var2);