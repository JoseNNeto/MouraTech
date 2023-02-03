function tabuada(numero) {
  let multiplicações = "";
  for (let i = 0; i <= 10; i++) {
    if (i == 10) {
      multiplicações = (`${multiplicações}${numero} x ${i} = ${numero * i}`);
    } else{
    multiplicações = (multiplicações + `${numero} x ${i} = ${numero * i}, `);
    }
  }
  return multiplicações;
}

console.log(tabuada(5));

