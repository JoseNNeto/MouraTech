function pa(inicio, razao, quantidade){
    let cont = 1;
    let progressao = "";
    while (cont <= quantidade){
        progressao += `${inicio}`;
        if (cont != quantidade){
            progressao += `, `;
        }
        inicio += razao;
        cont++;
    }
    progressao += `...`;
    return progressao;
}

console.log(pa(3, 3, 3));