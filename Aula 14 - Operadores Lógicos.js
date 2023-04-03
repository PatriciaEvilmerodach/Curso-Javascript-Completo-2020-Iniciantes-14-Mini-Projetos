// Os operadores lógicos são utilizados para tomar decisões baseadas em condições múltiplas
// Há 3 tipos: AND (&&), OR (||) e NOT (!)

// No Operador Lógico AND (&&) o resultado somente será verdadeiro quando as duas condições apresentadas forem verdadeiras

// Abaixo, comparações entre 2 valores do tipo Boolean:
console.log(true && true); // Resultado: TRUE
console.log(false && true); // Resultado: FALSE
console.log(true && false);  // Resultado: FALSE
console.log(false && false);  // Resultado: FALSE

// Exemplo: Uma empresa está contratando, mas você só pode aplicar à vaga se for maior de idade E já possuir carteira de trabalho
let maiorIdade = true;
let carteiraTrabalho = true;
let podeAplicar = maiorIdade && carteiraTrabalho; // O valor que será aplicado nesta variável é o resultado da comparação das variáveis acima
console.log(podeAplicar); // Aqui o console mostra o valor TRUE, pois a pessoa atende aos dois requisitos para aplicar à vaga

// No Operador Lógico OR (||) o resultado será verdadeiro quando qualquer uma das condições apresentadas for verdadeira

//Abaixo, comparações entre 2 valores do tipo Boolean:
console.log(true || true); // Resultado: TRUE
console.log(false || true); // Resultado: TRUE
console.log(true || false);  // Resultado: TRUE
console.log(false || false);  // Resultado: FALSE

// Exemplo: Uma pessoa quer comprar 2 refrigerantes diferentes: Um de Uva e outro de Laranja;
// Mas se por acaso um dos sabores acabar, não tem problema, a pessoa aceita levar o outro;
// Porém ela não vai aceitar comprar outro refrigerante caso ambos os sabores que ela quer tenham esgotado
let refrigeranteUva = true; // A loja tem o de Uva
let refrigeranteLaranja = false; // Mas o de Laranja acabou
let vaiComprar = refrigeranteUva || refrigeranteLaranja; // A pessoa vai comprar um OU o outro
console.log(vaiComprar); // Aqui o console mostra o valor TRUE, pois a pessoa comprou o refrigerante de Uva

// No Operador Lógico NOT (!) o resultado será verdadeiro quando a condição apresentada for falsa. Basicamente ele inverte: O que é TRUE, ele mostra FALSE; o que é FALSE, ele mostra TRUE

// Utilizando o primeiro exemplo novamente, se o candidato não atender aos requisitos para aplicar a vaga, ele deverá ser recusado.
let maiorIdade2 = true; // O candidato é maior de idade
let carteiraTrabalho2 = false; // Porém, não possui carteira de trabalho
let podeAplicar2 = maiorIdade2 &&  carteiraTrabalho2; // Logo, ele não pode aplicar à vaga, pois não atende à todos os requisitos
let candidatoRecusado = !podeAplicar2; // O candidato será recusado se ele não puder aplicar à vaga
console.log(candidatoRecusado); // Aqui o console mostra o valor TRUE; Sim, o candidato foi recusado