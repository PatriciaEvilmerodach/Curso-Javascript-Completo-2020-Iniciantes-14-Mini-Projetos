// Objetos são tipos de Referência, assim como os Arrays e as Functions
// Basicamente um objeto serve para juntar várias informações e armazena-las em um único lugar de fácil acesso

let perfilFormula1 = { // O nome do objeto é "perfilFormula1". Aqui vamos armazenar todas as informações (propriedades) sobre um dos pilotos

    nomePiloto: 'Lewis Hamilton', // Chamamos essas combinações de "Key Value pair". Aqui, "nomePiloto" é a chave e "Lewis Hamilton" é o valor atribuído à ela
    titulosMundiais: 7,
    equipeMercedes: true,
    posicaoCampeonato2024: undefined,
    corCapacete: null

};

console.log(perfilFormula1);
// Aqui, o console mostra todas as propriedades do objeto de uma só vez.
console.log(perfilFormula1.nomePiloto);
// E se quisermos mostrar somente uma das propriedades do objeto, é possível declarar o parâmetro como sendo "nome do objeto.propriedade do objeto"