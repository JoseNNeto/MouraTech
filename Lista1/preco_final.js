let valorfinal;
function preco_final(preco, forma){
    if (forma == 1){
        valorfinal = preco * 0.85;
    } else if (forma == 2){
        valorfinal = preco * 0.90;
    } else if (forma == 3){
        valorfinal = preco * 0.95;
    } else if (forma == 4){
        valorfinal = preco;
    }

    return valorfinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

console.log(preco_final(100, 1));
