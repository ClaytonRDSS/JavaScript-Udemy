/* 
    Além de propriedades, podemos criar a classe base já com métodos;
    Basta definir ao prototype o método desejado;
*/

function Cachorro(raca,patas,cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

//crianto metodo para a Objeto através de construtor; 
Cachorro.prototype.uivar = () => {
    console.log("Auuuuuu");
}

Cachorro.prototype.latir = () => {
    console.log("Au Au");
}

let husky = new Cachorro("Husky", 4, "Preto/Branco");

husky.latir();
husky.uivar();