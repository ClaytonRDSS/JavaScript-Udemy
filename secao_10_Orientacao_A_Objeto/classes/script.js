/*
    O prototype do javaScript pode ser uam classe;
    Pois outras linguagens uma class é um molde de um objeto;
    Ou sejá, podemos criar objetos em cima de um prototype;
*/

let cachorro = {
    raca: String,
    cor: String,
    latir: () => {console.log("Au, Au");},
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";
pastorAlemao.cor = "Preto";

console.log(pastorAlemao.raca);


let pitBull = Object.create(cachorro);

pitBull.raca = "Pit bull";
pitBull.cor = "Amarelo/Preto";

console.log(pitBull);
console.log(pastorAlemao);


let viralatas = new Object(cachorro);

viralatas.raca = "viralatas";
viralatas.cor = "Caramelo";

console.log(viralatas);
viralatas.latir();
pitBull.latir();
pastorAlemao.latir();