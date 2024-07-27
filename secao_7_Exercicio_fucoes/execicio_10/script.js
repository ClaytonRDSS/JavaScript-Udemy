let decrementeNun = (nun) => {
    //função para decrementar um valor informado
    for(let i = nun; i >= 0 ; i--) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

decrementeNun(10);