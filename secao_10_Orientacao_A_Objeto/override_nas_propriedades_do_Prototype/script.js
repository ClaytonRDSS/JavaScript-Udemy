/*
    Sempre que adicionar um propriedade a um objeto, é criodo uma idêntica no prototype;
    Podemos substituir a do prototype;
 */

    class Cachorro {
        constructor(raca, cor) {
            this.raca = raca;
            this.cor = cor;
        }
    }

    Cachorro.prototype.patas = 4;
    Cachorro.prototype.raca = "SRD";
    Cachorro.prototype.latir = () => {
        console.log("Au, Au")
    }

    let pitBull = new Cachorro("Pitbull", 4, "Preto")
    
    console.log(pitBull.patas)

    pitBull.latir();

    console.log(Cachorro.prototype.raca);
    console.log(pitBull.raca);

