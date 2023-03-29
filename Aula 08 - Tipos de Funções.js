// Basicamente há 2 tipos de funções:
// 1 - Aquela que realiza uma tarefa, mas não retorna informações que podemos utilizar posteriormente
// 2 - Aquela que realiza a tarefa e retorna informações que podemos utilizar posteriormente

// Exemplo do primeiro tipo:
function exibirFrase() { // Criamos uma função que vai executar o comando "console.log" e exibir uma frase pré-determinada na tela
    console.log('Hello World!') // A frase inserida no parâmetro é "Hello World!"
}
exibirFrase(); // A função realizou a tarefa: Mostrou a frase na tela; apenas isso

// Exemplo do segundo tipo:
function multiplicarNumero(numero){ // Criamos uma função para multiplicar qualquer número a ser inserido no parâmetro
    return numero * 2; // Neste caso, a função deverá multiplicar o número por 2
}
let resultado = multiplicarNumero(5); // Aqui vamos inserir, dentro de uma variável, o resultado da multiplicação realizada pela função "multiplicarNumero"
console.log(resultado); // O número "10" é exibido na tela, pois a multiplicação "5 * 2" retornou o resultado "10"