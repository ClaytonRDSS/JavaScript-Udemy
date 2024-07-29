
let pesssoa = {
    nome: "clayton",
    profissao: "Analista",
    idade: 37
}

console.log(pesssoa.nome);
console.log(pesssoa.profissao);
console.log(pesssoa.idade);

//deletando  propriedade;
delete pesssoa.nome;

console.log(pesssoa.nome);

// addcionando propriedade;
pesssoa.casado = true;
console.log(pesssoa.casado);