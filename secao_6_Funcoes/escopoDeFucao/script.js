
// Variavel de Escopo Global;
let i = 10;

function imprimir() {

    //Variable de escopopo local;
    let i = 25;
    console.log(i);
}

console.log(i);
imprimir();