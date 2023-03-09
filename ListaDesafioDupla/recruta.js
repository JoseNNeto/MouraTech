// Este ano o sargento está tendo mais trabalho do que de costume para treinar os recrutas. Um deles é muito atrapalhado, e de vez em quando faz tudo errado – por exemplo, ao invés de virar à direita quando comandado, vira à esquerda, causando grande confusão no batalhão.

// Vamos ajudar este recruta!

// Elabore uma função que recebe uma string que contém apenas letras E e D, onde E significa Esquerda, Volver! e D significa Direita, Volver!.

// A cada comando, o recruta, que começa olhando para o Norte, deve girar sobre o mesmo ponto e dar um quarto de volta na direção correspondente ao comando.

// Ao final dos comandos a função deve retonar para que direção o recruta está olhando: Norte, Sul, Leste ou Oeste.

function recruta(instrucoes){
    direcoes = ['Norte', 'Leste', 'Sul', 'Oeste'];
    atual = 0;

    for (let i = 0; i < instrucoes.length; i++) {
        if(instrucoes[i] == 'D'){
            if (atual == 3) {
                atual = 0;
            }else{
                atual++;
            }
        }else{
            if (atual == 0) {
                atual = 3;
            }else{
                atual--;
            }
        }
    }

    return direcoes[atual];
}

console.log(recruta('DDDD'));