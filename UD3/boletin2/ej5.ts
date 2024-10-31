function textos_aleatorios(){

    let frases: string[] = [
        "Frase aleatoria uno que habla del clima", 
        "Frase aleatoria dos que habla del universo",
        "Frase aleatoria tres que habla de la vida"
    ];

    let idx_frase = Math.floor(Math.random() * frases.length);

    let parrafo = document.createElement("p").innerText = frases[idx_frase];
    
}