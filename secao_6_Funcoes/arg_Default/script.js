function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log(potencia(2));
console.log(potencia(2,2));

// Argumento passado na chamada se for diferente do default, substitui o argumento 
console.log(potencia(2,3));