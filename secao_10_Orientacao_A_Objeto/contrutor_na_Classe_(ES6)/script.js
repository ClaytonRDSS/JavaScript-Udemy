/*
    Com a versão do ES6, uma possibilidade de criar um classe(objeto) com construtor foi adcionada;
    Então não precisamos mais criar por meio de um função vej; 
 */

    class Cachorro {
        constructor(raca, patas, cor) {
            this.raca = raca;
            this.patas = patas;
            this.cor = cor;
        }
    }

    Cachorro.prototype.latir = () => {
        console.log("Au, Au")
    }

    let pitBull = new Cachorro("Pitbull", 4, "Preto")
    
    console.log(pitBull)

    pitBull.latir();

