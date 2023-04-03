// Semelhante ao Loop While, porém o comando será executado no mínimo uma vez
// Enquanto nos outros tipos de Loop o computador verifica a condição e só depois executa o comando, neste ele é executado primeiro e verificado depois

let numero = 0

do {
    console.log('Número:', numero);
    numero++; // Se esquecer de colocar este operador, o comando ficará eternamente em Loop, pois o valor da variável nunca será atualizado; Logo, sempre vai atender à condição a seguir:
} while (numero <= 10); // O comando deverá ser executado enquanto o número for menor ou igual à 10

// Desta vez o comando foi executado 11 vezes no total, pois a contagem iniciou no 0
// Primeiro ele foi executado 1 vez, depois repetiu o loop 10 vezes