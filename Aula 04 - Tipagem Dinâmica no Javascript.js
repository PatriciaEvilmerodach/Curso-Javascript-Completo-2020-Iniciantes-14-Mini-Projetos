// Vamos supor que não sabemos os tipos das variáveis abaixo; é possível obter essa informação através do "typeof" + o nome da variável

let nomePiloto = 'Lewis Hamilton';
console.log(typeof nomePiloto);
// Aqui o valor "string" será impresso na tela, pois a variável "nomePiloto" é do tipo String. O mesmo se aplica nos exemplos a seguir

let titulosMundiais = 7;
console.log(typeof titulosMundiais);
// O valor "number" será impresso na tela

let equipeMercedes = true;
console.log(typeof equipeMercedes);
// O valor "boolean" será impresso na tela

let posicaoCampeonato2024 = undefined;
console.log(typeof posicaoCampeonato2024);
// O valor "undefined" será impresso na tela

let corCapacete = null;
console.log(typeof corCapacete);
// Porém, aqui o valor "object" será impresso na tela; O Javascript reconhece o tipo "null" como sendo um objeto