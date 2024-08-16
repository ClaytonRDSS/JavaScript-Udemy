

let pessoa = {
    nome: '',
    //Método para inserir um nome na variavel nome;
    setNome: (novoNome) => {
        // this é é uma referência do objeto (ex: this.name = pessoa.name) 
        this.nome = novoNome;
    },

    // Método para pegar o nome inserido e mostrar no console;
    getNome: () => {
        return this.nome;
    }
}

pessoa.setNome("Clayton");
console.log(pessoa.getNome());