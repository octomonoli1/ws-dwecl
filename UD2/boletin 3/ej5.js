var num = prompt("Introduce un número en binario");
var valor = 0;
var exp = num.length-1;

for(let i = 0 ; i <= num.length-1 ; i++){    
    valor += num[i]*Math.pow(2,exp);
    console.log("Para el indice " + i + " el numero es " + num[i] + "y el valor es " + valor);
    console.log("Exp " + exp);
    exp = exp -1;
}

console.log("El numero introducido es: " + valor);

// 1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) =  12
// 1010 = 1*(2^3) + 0*(2^2) + 1*(2^1) + 0*(2^0) =  10
