// Elabore uma função que recebe um array que representa um jogo da velha e retorne um dos sequintes estados: "Vez do jogador X.", "Vez do jogador O.", "Jogador X venceu!", "Jogador O venceu!", "Deu velha!".

// OBS: Considere que o jogo sempre inicia pelo jogador X e que as posições 0, 1 e 2 do array são a primeira linha do jogo, as posições 3, 4 e 5 do array são a segunda linha do jogo, e que as posições 6, 7 e 8 do array são a terceira linha do jogo.

function velha(jogo){
    let qnt_x = qnt_o = 0;

    //Vitoria do X
    if (jogo[0] == "X" && jogo[1] == "X" && jogo[2] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[3] == "X" && jogo[4] == "X" && jogo[5] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[6] == "X" && jogo[7] == "X" && jogo[8] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[0] == "X" && jogo[3] == "X" && jogo[6] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[1] == "X" && jogo[4] == "X" && jogo[7] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[2] == "X" && jogo[5] == "X" && jogo[8] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[0] == "X" && jogo[4] == "X" && jogo[8] == "X") {
        return "Jogador X venceu!";
    } else if (jogo[2] == "X" && jogo[4] == "X" && jogo[6] == "X") {
        return "Jogador X venceu!";
    } else {
        //Vitoria do O
        if (jogo[0] == "O" && jogo[1] == "O" && jogo[2] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[3] == "O" && jogo[4] == "O" && jogo[5] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[6] == "O" && jogo[7] == "O" && jogo[8] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[0] == "O" && jogo[3] == "O" && jogo[6] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[1] == "O" && jogo[4] == "O" && jogo[7] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[2] == "O" && jogo[5] == "O" && jogo[8] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[0] == "O" && jogo[4] == "O" && jogo[8] == "O") {
            return "Jogador O venceu!";
        } else if (jogo[2] == "O" && jogo[4] == "O" && jogo[6] == "O") {
            return "Jogador O venceu!";
        } else {
            for (let i = 0; i < jogo.length; i++) {
                if (jogo[i] == "X") {
                    qnt_x++;
                } else if (jogo[i] == "O") {
                    qnt_o++;
                }
            }//Vez do X
            if (qnt_x == qnt_o) {
                return "Vez do jogador X.";
            } //Vez do O
            else if (qnt_x == 5) {
                return "Deu velha!";
            }
            else if (qnt_x > qnt_o) {
                return "Vez do jogador O.";
            }  //Deu velha

        }
    }
}

console.log(velha(["X"," ","O"," ","O","X","O","X"," "])); // Jogador O venceu!