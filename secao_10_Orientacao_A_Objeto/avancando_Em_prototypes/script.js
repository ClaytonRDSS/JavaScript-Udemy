/* 
    Quando criamos um objeto a partir de outro, a base será o prototype;
    Ele herdará tanto os métodos e propriedades de Object (o prototype do objeto) base;
    Quando os do objetos base para o novo;  
*/


const pessoa = {
    maos: 2,
}

//Criando outro Objeto com outro Objeto - pessoa e recebendo todas as propriedades dele;
// Agora pessoa é o prototype de pessoaNova;
let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

console.log(pessoaNova.hasOwnProperty("maos"));