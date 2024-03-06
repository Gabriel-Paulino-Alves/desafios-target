function verificaFibo(numero){
    let a = 0, b = 1;
    while (b < numero) {
        let temporario =  b;
        b = a+b;
        a = temporario;
    }
    //verifico se o numero pertence ou nao a sequencia de fibo
    return b === numero ? `${numero} pertence a sequenia de fibonaci.` : `${numero} não pertence a sequenia de fibonaci.`;
};

// numero que pertence a sequencia
const numero = 21;

// numero que nao pertence
const segundoNumero = 9;


console.log(verificaFibo(numero));
console.log(verificaFibo(segundoNumero));