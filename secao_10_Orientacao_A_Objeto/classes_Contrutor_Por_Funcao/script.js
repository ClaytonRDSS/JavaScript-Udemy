/* 
    Construtores são formas de instaciar um classe em uma linguagem de programação;
    Instanciar = Criar um objeto novo;
    No contrutor já podemos definir propriedades;
*/


let criarCachorro = (raca, patas, cor) => {
    let cachorro = new Object({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = () => {console.log("Au, Au");}
    return cachorro;
}

let pitBull = criarCachorro("Pitbull", 4, "Preto");

console.log(pitBull);
pitBull.latir();