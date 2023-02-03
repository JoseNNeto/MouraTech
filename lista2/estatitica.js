function estatistica(array) {
  let maior = array[0];
  let menor = array[0];
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
    soma += array[i];
  }
  return [maior, menor, soma / array.length];
}

console.log(estatistica([5, 1, 9, 2, 3, 0, 1]));