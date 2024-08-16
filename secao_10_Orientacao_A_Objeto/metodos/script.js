// Propriedade que servem como função;
// ou seja, as ações dos objetos;
// invocamos os métodos da mesma maneira que funções;

let cachorro = {
    //método latir
    latir:  () => {console.log("Au au")},
    rosnar: () => {console.log("grrrrrr")} 
}
// invocando o metodo latir que vai imprimir a mensagem no console; 
cachorro.latir();
cachorro.rosnar();