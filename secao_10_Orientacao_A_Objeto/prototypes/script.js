/* 
    Um objeto fallback de outro objeto
    Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototyp deste objeto;
    O prototype de um Objeto criado do zero é o Object, que tem os métodos nativos da linguagem.
*/


const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// pessoa é um prototype de Object, erdando o metodos dele exemplo: hasOwnProperty no console abaixo;
console.log(pessoa.hasOwnProperty('maos'));