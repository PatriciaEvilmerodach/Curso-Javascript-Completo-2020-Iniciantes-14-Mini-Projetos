// Operadores Matemáticos básicos:

function somaEntreNumeros(a,b) {
    return a + b; // Para realizar a SOMA entre dois números, utilizamos o operador +
}
let soma = somaEntreNumeros(1,2);
console.log(soma); // Aqui o console mostra o resultado de 1 + 2 = 3

function subtracaoEntreNumeros(a,b) {
    return a - b; // Para realizar a SUBTRAÇÃO entre dois números, utilizamos o operador -
}
let subtracao = subtracaoEntreNumeros(2,1);
console.log(subtracao);  // Aqui o console mostra o resultado de 2 - 1 = 1

function multiplicacaoEntreNumeros(a,b) {
    return a * b; // Para realizar a MULTIPLICAÇÃO entre dois números, utilizamos o operador *
}
let multiplicacao = multiplicacaoEntreNumeros(3,4);
console.log(multiplicacao);  // Aqui o console mostra o resultado de 3 * 4 = 12

function divisaoEntreNumeros(a,b) {
    return a / b; // Para realizar a DIVISÃO entre dois números, utilizamos o operador /
}
let divisao = divisaoEntreNumeros(6,3);
console.log(divisao);  // Aqui o console mostra o resultado de 6 / 3 = 2

function potenciacaoDeNumeros(a,b) {
    return a ** b; // Para realizar a POTENCIAÇÃO de um número, utilizamos o operador **
}
let potenciacao = potenciacaoDeNumeros(2,3);
console.log(potenciacao);  // Aqui o console mostra o resultado de 2 ** 3 (2 elevado à potência 3 [ou 2 ao cubo]) = 8

// Operadores de Incremento e Decremento: ++ e -- adicionam e subtraem, respectivamente, o valor 1 de um determinado número; ou seja, "+1" e "-1"

let exemplo1 = 10; // Aqui definimos o número inicial como sendo 10
console.log(exemplo1++);
// Adicionamos o operador de incremento ao número, ou seja, o computador vai pegar o número 10 e somar 1
// Porém o console só vai mostrar o resultado quando o comando for acionado novamente
console.log(exemplo1);
// Ao acionar o comando novamente, agora o console exibe o número 11

let exemplo2 = 10; // Aqui definimos o número inicial como sendo 10
console.log(exemplo2--);
// Adicionamos o operador de decremento ao número, ou seja, o computador vai pegar o número 10 e subtrair 1
// Porém o console só vai mostrar o resultado quando o comando for acionado novamente
console.log(exemplo2);
// Ao acionar o comando novamente, agora o console exibe o número 9

// Mas e se eu quiser que o console exiba o valor incrementado ou decrementado na primeira vez que eu acionar o comando "console.log"?

let exemplo3 = 10;
console.log(++exemplo3);
let exemplo4 = 10;
console.log(--exemplo4);
// Basta adicionar o ++ ou -- ANTES