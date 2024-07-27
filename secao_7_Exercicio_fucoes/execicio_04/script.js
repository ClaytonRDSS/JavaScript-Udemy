let nunAleatorio = (ale) => {
    // função para gerar numeros aleatórios aredondados inteiros.
    return Math.floor(Math.random() * ale) + 1;
}

console.log(nunAleatorio(10));
console.log(nunAleatorio(50));
console.log(nunAleatorio(18));