function intervalo(inicio, fim) {
    let array = [];
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i++) {
            array.push(i);
        }
    } else {
        for (let i = inicio; i >= fim; i--) {
            array.push(i);
        }
    }
    return array;
}

console.log(intervalo(0, -5));