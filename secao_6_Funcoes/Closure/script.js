
function lembara(x) {
    return function(y) {
        return x + y;
    } 
}

let somar1 = lembara(2);
console.log(somar1(5));

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();