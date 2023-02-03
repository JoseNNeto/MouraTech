function primo(numero) {
    let qnt_div = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            qnt_div++;
        }
    }

    if (qnt_div == 2) {
        return true;
    } else {
        return false;
    }
}

console.log(primo(7));