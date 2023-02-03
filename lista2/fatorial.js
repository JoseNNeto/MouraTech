function fatorial(numero){

    let resultado = 1;
    let saida = `${numero}! = `;
    
    if(numero == 0){
        return "0! = 1";
    } else{
    
    for(let i = numero; i >= 2; i--){
        saida += (`${i} x `);
        resultado = resultado * i;
    }
    saida = (saida + `1 = ${resultado}`);
    return saida;
    }
}

console.log(fatorial(5));