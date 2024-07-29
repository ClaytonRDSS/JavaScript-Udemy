// Copiando todas as propriedades de um Objeto para o outro;

// method assign 

let carro = {
    portas: 2,
    portaMalas: "200l",
    motor: "1.8"
}

let addicionar = {
    tetoSolar: true,
    arcondicionado: true
}

Object.assign(carro, addicionar);

console.log(carro);