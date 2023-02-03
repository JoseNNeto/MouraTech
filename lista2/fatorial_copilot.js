//Escreva uma função que recebe um valor numérico N e retorna uma STRING com 
//a seqüência de valores do cálculo de N! (Fatorial) e o seu resultado. 
//Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120
//Nome da função: fatorial

//Paramêtros: (number)

//Retorno: string

function fatorial(numero){
    if(numero == 0){
        return "0! = 1";
    } else{
        let resultado = 1;
        let saida = `${numero}! = `;
        
        for(let i = numero; i >= 2; i--){
            saida += (`${i} x `);
            resultado = resultado * i;
        }
        saida = (saida + `1 = ${resultado}`);
        return saida;
    }
}

console.log(fatorial(-15));