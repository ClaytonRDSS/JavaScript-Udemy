const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(3));

let consoleTest = (n) => {
    console.log("hello world!");
};
consoleTest();


let somar = (a, b) => {
    return a + b;
};
console.log(somar(5, 2));

const raizQuadrada = (x) => {
    return x * x;
}

// Definição simples para arrow functions com um paramentro;
const raizQuadrada2 = n => n * n; 

console.log(raizQuadrada(2));
console.log(raizQuadrada(4));