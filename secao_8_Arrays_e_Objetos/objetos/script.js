// Uma coleção de propriedades, parecida com arrays;
// estrutura de chave e valor;

// [] = Arrays
// {} = Object


let pesssoa = {
    nome: "clayton",
    profissao: "Analista",
    idade: 37
}

let cachorro = {
    patas: 4,
    nome: "Shark",
    latir: () => {
        console.log("Au Au");
    }
}



console.log(pesssoa.nome);
console.log(pesssoa.profissao);
console.log(pesssoa.idade);


console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();


