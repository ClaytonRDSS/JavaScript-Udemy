let idade = 17;
let cnh = true;

if(idade >= 18 && cnh == false) {
    console.log("Não tem autorização para Dirigir");
} 
else if(idade >= 18 && cnh == true) {
        console.log("Tem Autorização Para Dirigir");
} else {
    console.log("Completar 18 ou mais e tirar a habilitação!");
}