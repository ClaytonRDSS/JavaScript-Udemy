/*
    Propriedade única, que não pode ser alteradas e nem criadas duas vezes;
    Podemos utilizar como uma constante, só que para propriedade de objeto;
*/


class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
}

Cachorro.prototype.raca = "SRD";

// Symbol funciona com uma variavel constante que não pode se mudada;
let patas = Symbol();
Cachorro.prototype[patas] = 4;

Cachorro.prototype.latir = () => {
    console.log("Au, Au")
}

let pitBull = new Cachorro("Pitbull", "Preto")

console.log(pitBull);

pitBull.latir();

console.log(Cachorro.prototype[patas]);
console.log(Cachorro.prototype.raca);
console.log(pitBull.raca);
console.log(pitBull[patas]);
