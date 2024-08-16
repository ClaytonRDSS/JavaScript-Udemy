/*
    Não podemos adicionar propriedades na classe, só via prototype;
    Classe só aceita métodos;
*/

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au, Au");
    }
}

Cachorro.prototype.patas = 4;

let pastorAlemao = new Cachorro("Pastor Alemão", "Amarelo");
console.log(pastorAlemao);

console.log(pastorAlemao.patas);

pastorAlemao.latir();

