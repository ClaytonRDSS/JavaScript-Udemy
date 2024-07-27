function somar(a,b) {
    if(a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos");
    } else {
        return a + b;
    }
}

console.log(somar());
console.log(somar(5,7));