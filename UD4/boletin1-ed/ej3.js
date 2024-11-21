let edades = new Array(18,16,9,23,33,45,60,71,18,22,40,50,51,632,47,12);

let media = 0;
edades
    .filter(edad => (edad >= 18 && edad <= 50))
    .forEach((edad, i, filt) => media += edad/filt.length);
console.log("La edad media es: " + Math.round(media));