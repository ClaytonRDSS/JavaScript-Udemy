let pessoa = {
    "nome": "Clayton",
    "idade": 37,
    "Profissão": "Programadoe",
    "hobbies": ["video game", "Leitura", "correr"]
}

// Transforma o Json em uma string; 
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

// undefined, não pode mais acessar o json;
console.log(pessoaTexto.nome);

// Transforma em Json novamente;
let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);

console.log(pessoaJson.hobbies[0]);
