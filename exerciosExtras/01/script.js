const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []
const semImpares = []

for(let i = 0; i <= arr.length; i++) {
    if(i % 2 === 1) {
        semPares.push(i)
    } else if (i % 2 === 0) {
        semImpares.push(i)
    }
}

console.log(semPares);
console.log(semImpares);

