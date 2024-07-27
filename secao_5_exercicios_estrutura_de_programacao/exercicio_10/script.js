let num = 41;
let divisao = 0;

for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        divisao++;
    }
}

if(divisao == 2) {
    console.log(`O número ${num} é Primo.`);
} else {
    console.log(`O número ${num} não é Primo.`);
}