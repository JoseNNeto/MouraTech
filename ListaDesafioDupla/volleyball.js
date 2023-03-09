// Caio acompanha todos os jogos do seu clube de Volleyball preferido. De cada temporada ele guarda anotado todos os placares sempre colocando os Sets ganhos por seu time na frete.

// Exemplo: 3x1,3x0,2x3,3x0,1x3,3x1

// Elabore uma função que recebe uma string com os resultados anotados por Caio em uma temporada e retorne um array contendo a quantidade de vitórias, derrotas, sets vencidos e sets perdidos.

function volleyball(valores){
    let vitorias = 0;
    let derrotas = 0;
    let setsVencidos = 0;
    let setsPerdidos = 0;
    let array = valores.split(',');
    for(let i = 0; i < array.length; i++){
        let sets = array[i].split('x');
        setsVencidos += Number(sets[0]);
        setsPerdidos += Number(sets[1]);
        if(Number(sets[0]) > Number(sets[1])){
            vitorias++;
        }else{
            derrotas++;
        }
    }
    return [vitorias, derrotas, setsVencidos, setsPerdidos];
}

console.log(volleyball('3x1,3x0,2x3,3x0,1x3,3x1'));