// As Strings são de 2 tipos: Primitivo ou Objeto

// Exemplo do tipo Primitivo:
const mensagem = 'Esta é uma mensagem';

// Exemplo do tipo Objeto:
const outraMensagem = new String('Esta é outra mensagem');

// Em ambos os tipos é possível utilizar alguns métodos. Aqui tem uma lista com vários deles: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let exemplo1 = mensagem.length; // Exibe qual a quantidade de caracteres da String
console.log(exemplo1);

let exemplo2 = outraMensagem[5]; // Exibe qual caractere está no índice declarado em []
console.log(exemplo2);

let exemplo3 = mensagem.includes('uma'); // Retorna TRUE ou FALSE ao declarar se dentro da String tem um determinado caractere ou palavra
console.log(exemplo3);

let exemplo4 = outraMensagem.startsWith('Esta'); // Retorna TRUE ou FALSE ao declarar se a String inicia com determinado caractere ou palavra
console.log(exemplo4);

let exemplo5 = mensagem.endsWith('mensagem'); // Retorna TRUE ou FALSE ao declarar se a String termina com determinado caractere ou palavra
console.log(exemplo5);

let exemplo6 = outraMensagem.indexOf('outra'); // Exibe qual o índice ao declarar determinado caractere ou palavra que está dentro da String
console.log(exemplo6);

let exemplo7 = mensagem.replace('mensagem', 'string'); // Realiza a substituição de determinado caractere ou palavra por outro
console.log(exemplo7);

let exemplo8 = outraMensagem.split (' '); // Realiza o particionamento da String toda vez que encontrar o valor declarado em (); neste exemplo tem um espaço em branco, logo, vai particionar a string em 4 partes e exibir cada palavra separadamente
console.log(exemplo8);