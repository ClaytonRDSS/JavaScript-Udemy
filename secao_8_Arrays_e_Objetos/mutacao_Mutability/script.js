let pessoa = {
    nome: "Matheus"  
}

let pessoa2 = pessoa;

console.log(pessoa2);

let pessoa3 = {
    nome: "Matheus"
}

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3);

pessoa2.nome = "Pedro";
console.log(pessoa2.name);
