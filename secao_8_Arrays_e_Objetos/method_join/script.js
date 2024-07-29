// Method Join junta elementos em um array em uma frase, por meio de um separador;

let frase = "Testando o método Join";

let palavra = frase.split(" ");

let novaFrase = palavra.join("@");

console.log(novaFrase);

console.log(palavra.join(" "));
