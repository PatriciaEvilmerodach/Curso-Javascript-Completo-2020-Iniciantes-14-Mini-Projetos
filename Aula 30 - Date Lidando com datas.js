// Há várias formas de definir uma data; Aqui tem uma lista com as possibilidades: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// Alguns exemplos:

const exemplo1 = new Date();
console.log(exemplo1); // Como não declaramos a data entre (), o console vai exibir a data atual ao realizar o comando

const exemplo2 = new Date('April 09 2023 03:03');
console.log(exemplo2); // Aqui o console exibe a data declarada no parâmetro

const exemplo3 = new Date(2023, 03, 09, 03, 03);
console.log(exemplo3); // Igual o exemplo acima, mas escrito de uma forma diferente; somente números: Ano, Mês, Dia, Hora, Minuto. Importante lembrar que o mês de Janeiro inicia no número 0

// Também é possível extrair ou alterar informações de datas através dos métodos GET e SET respectivamente

let exemploGET = exemplo1.getFullYear(); // Quero extrair a informação Ano da data atual
console.log(exemploGET); // O console vai exibir qual é o ano no momento que o comando foi executado. No momento em que escrevo isso, ele exibe 2023; mas se eu rodar esse mesmo código no futuro será outro ano.

let exemploSET = exemplo3.setFullYear(2077); // Aqui declaramos um novo ano para substituir o do Exemplo 3
console.log(exemplo3); // Quando pedimos para exibir novamente o Exemplo 3, o ano que era 2023 foi alterado para 2077

// Também é possível transformar essas informações de datas em Strings, basta utilizar os métodos:
// nomeVariavel.toDateString
// nomeVariavel.toTimeString
// nomeVariavel.toISOString (para converter a data em um formato que é utilizado em Bancos de Dados; por exemplo, quando quiser transferir informações de data do Cliente para o Servidor)