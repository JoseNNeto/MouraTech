function fibonacci(n) {
    sequencia = "0, ";
    if (sequencia == 1) {
        return sequencia;
    } else{
        for (var i = 0; i < n; i++) {
        var a = 0;
        var b = 1;
        var c = a + b;
        a = b;
        b = c;
        sequencia += `${c} `;
        if (i != n) {
        sequencia += ", ";
        }
        }
        return sequencia;
    }
}

console.log(fibonacci(1));