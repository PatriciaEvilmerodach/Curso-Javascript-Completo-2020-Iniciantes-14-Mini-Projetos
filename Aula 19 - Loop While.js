// O Loop While funciona de forma semelhante ao Loop For, porém a variável de índice é declarada fora do Loop

// Exemplo: Temos uma variável "número" onde seu valor inicial é 10
// Vamos utilizar o operador de decremento (--) para diminuir o valor enquanto ele for maior ou igual à 1
// Quando o resultado do valor da variável for um número menor do que 1, o comando deverá parar de ser executado

let numero = 10; // A contagem decrescente inicia em 10

while (numero >= 1) { // Enquanto o número é maior ou igual à 1
    console.log('Número:', numero); // O comando é executado em looping 10 vezes
    numero--; // Sempre tirando -1 do valor a cada vez que é executado
}