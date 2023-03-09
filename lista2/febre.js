let array = [];

function febre(array) {
    let resposta = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 35.1) {
            resposta[i] = "Hipotermia";
        } else if (array[i] >= 35.1 && array[i] <= 37.7) {
            resposta[i] = "Normal";
        } else if (array[i] > 37.7 && array[i] < 39.6) {
            resposta[i] = "Febre";
        } else if (array[i] >= 39.6 && array[i] <= 41) {
            resposta[i] = "Febre Alta";
        } else if (array[i] > 41) {
            resposta[i] = "Hipertermia";
        }
    }
    return resposta;
} 

console.log(febre([35.41, 33.12, 41.06, 38.9, 40.22]));