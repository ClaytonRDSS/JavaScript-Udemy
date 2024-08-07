let numero01 = [5, 6, 7, 8, 9, 10, 11, 12, 13];
let numero02 = [30, 25, 15, 6];


let verificarNum = (num) => {
    if(num.length < 5 ) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos  elementos");
    }
}


verificarNum(numero02);