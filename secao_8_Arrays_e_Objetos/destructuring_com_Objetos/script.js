let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: 2.0
}

// Forma destructuring
const { rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor } = obj; 


console.log(vRodas);
console.log(vPortas);