const numeros = new Array(3);

function ordenar_3_numeros(num1, num2, num3){
    numeros[0] = num1;
    numeros[1] = num2;
    numeros[2] = num3;
    numeros.sort(function(a, b){return b - a});
    return numeros;
}

console.log(ordenar_3_numeros(1, 2, 3));