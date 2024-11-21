let playas = ["maspalomas","caleta","victoria","chipiona","matalascañas","rota","ingles","alemanes"];

console.log("1. Bucle clasico");
for(let i = 0; i < playas.length-1 ; i++){
    if(i%2 == 0){
        console.log(playas[i]);
    }
}

console.log("2. Bucle moderno");
playas.forEach((playa, index) => {
    if(index %2 == 0){
        console.log(playa);
    }
});

console.log("3. Filtro")
console.log(playas.filter((playa,index) => index%2==0));