// Há 2 tipos de operadores de igualdade: Igualdade Estrita (===) e Igualdade Solta (==)

// Igualdade estrita: Além de comparar valores, também compara tipos
console.log(1 === 1);
// 1 é estritamente igual à 1? Sim, pois é o mesmo valor e o mesmo tipo (Number)

console.log('1' === 1);
// '1' é estritamente igual à 1? Não, pois o valor pode até ser o mesmo, mas o tipo é diferente (String e Number respectivamente)

// Igualdade Solta: Compara somente valores, independente dos tipos
console.log (1 == 1);
// 1 é igual à 1? Sim, pois é o mesmo valor (ambos são do tipo Number)

console.log('1' == 1);
// '1' é igual à 1? Sim, pois é o mesmo valor (apesar de serem do tipo String e Number respectivamente)

// Ao realizar comparações de valores é recomendado sempre utilizar o operador de igualdade estrita
// Assim minimiza o risco de realizar operações com resultados equivocados ou inesperados