function imc(altura, peso) {
    let indice = (peso / (altura * altura));
    if (indice <= 18.5) {
        return 'Baixo peso';
    } else if (indice > 18.5 && indice < 25) {
        return 'Peso normal';
    } else if (indice >= 25 && indice < 30) {
        return 'Excesso de peso';
    } else if (indice >= 30 && indice < 35) {
        return 'Obesidade';
    } else{
        return 'Obesidade Extrema';
    }
}

console.log(imc(1.80, 50));
console.log(imc(1.80, 60));
console.log(imc(1.80, 90));
console.log(imc(1.80, 110));
console.log(imc(1.80, 130));