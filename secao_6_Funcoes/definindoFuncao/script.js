
// Declaração de função sem parametro ou argumentos
function imprimirNoConsole02() {
    console.log("Hello world!");    
}
imprimirNoConsole02();


// Declaração de função com parametro ou argumentos
function imprimirNoConsole02(prn) {
    console.log("O número é " + prn);    
}
imprimirNoConsole02(10);



// Discrição de uma função anonima;
const definirIdade = function(idade) {
    if(!idade) return undefined;
    else if(idade <= 17) return "De menor";
    else if(idade >= 17) return "De maior";
}

console.log(definirIdade(25));