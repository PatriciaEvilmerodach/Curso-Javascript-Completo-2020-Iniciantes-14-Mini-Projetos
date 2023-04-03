// Operadores Ternários são aqueles que utilizamos para realizar comparações

let idade = 18
let maioridadePenal = idade < 18 ? 'Menor de Idade' : 'Maior de Idade';
// O operador ? está fazendo a seguinte pergunta: "A idade é menor que 18?"
// Em seguida temos a comparação: "Caso positivo, a pessoa é menor de idade" : "Caso contrário, ela é maior de idade"
// Ou seja, seguimos o padrão: "Pergunta" ? "O que acontece se a resposta for Sim" : "O que acontece se a resposta for Não"

console.log(maioridadePenal);
// Como o valor atribuído à variável idade é 18, então a pessoa é Maior de idade