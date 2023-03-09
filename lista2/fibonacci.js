function fibonacci(n) {
  resultado =  "";
  atual = 0;
  proximo = 1;
    for (i = 0; i < n; i++) {
        if (i == n-1) {
            resultado += atual+ "...";
            proximo = proximo + atual;
            atual = proximo - atual;
        } else{
        resultado += atual + ", ";
        proximo = proximo + atual;
        atual = proximo - atual;
        }
    }
    return resultado;
} 

console.log(fibonacci(2));