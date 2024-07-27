let y = 5; // escopo global

const multiplicar = function (x) {
    let y = x * 2;
    console.log(y); // escopo da função
    if (y == 10) {
        let y = 55;
        console.log(y); // escopo do if 
    }
}

multiplicar(y);