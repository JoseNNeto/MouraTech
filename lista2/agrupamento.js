function agrupamento(array){
    let grupo1 = grupo2 = grupo3 = grupo4 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >=0 && array[i] <= 25) {
            grupo1++;
        } else if (array[i] >= 26 && array[i] <= 50) {
            grupo2++;
        } else if (array[i] >= 51 && array[i] <= 75) {
            grupo3++;
        } else if (array[i] >= 76 && array[i] <= 100) {
            grupo4++;
        }
    }
    return [grupo1, grupo2, grupo3, grupo4];
}
console.log(agrupamento([10, 5, 80, 60, 25, 99, 81, 92]));