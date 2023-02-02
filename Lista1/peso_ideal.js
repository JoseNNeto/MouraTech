function peso_ideal(altura, sexo) {
    if (sexo == 'M' || sexo == 'm') {
        return (72.7 * altura) - 58;
    } else if (sexo == 'F' || sexo == 'f') {
        return (62.1 * altura) - 44.7;
    } else {
        return 'Sexo inválido';
    }
}

console.log(peso_ideal(1.80, 'f'));