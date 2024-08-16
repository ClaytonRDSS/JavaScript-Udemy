/* 
    Em muitas linguagem temos a possibilidade de instaciar um objeto com new, no js Também;
*/


function Cachorro(raca,patas,cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = () => {console.log("Auuuuu!!!!");}
}

let husky = new Cachorro("Husky", 4, "Preto/Branco");

console.log(husky);
