// O resultado de uma comparação lógica nem sempre será TRUE ou FALSE
// Há um conceito chamado Truthy/Falsy, onde Falsy são os valores: Undefined / Null / 0 / False / " " (String vazia) / NaN (Not a Number)
// Valores que não sejam algum dos tipos mencionados acima são considerados Truthy

let exemplo1 = 'String' || false; // Ao realizar uma comparação utilizando o operador "OR", o resultado será o valor Truthy
console.log(exemplo1); // Logo, o resultado mostrado no console é a String

let exemplo2 = 100 || false; // Outra comparação utilizando o mesmo operador lógico
console.log(exemplo2); // Aqui, o resultado mostrado no console é o Number

let exemplo3 = 'String' || 100 || false; // Neste exemplo, vamos comparar 3 valores diferentes, sendo que 2 deles são Truthy
console.log(exemplo3);
// Por se tratar do operador lógico "OR", mesmo que tenha mais de um valor Truthy, somente o primeiro da esquerda pra direita será exibido
// Isso acontece pois ao encontrar um valor Truthy, o operador lógico para de realizar a comparação e ignora tudo que vier depois