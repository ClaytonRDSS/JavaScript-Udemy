let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2,
}


console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);


onibus.janelas = 20;

console.log(onibus.janelas);

delete onibus.rodas;

console.log(onibus);