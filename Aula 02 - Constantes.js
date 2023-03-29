// A variável do tipo "Let" é utilizada quando o valor dela está sempre mudando, por exemplo:

let ingressoCinema = 20;
console.log(ingressoCinema);
// Atribuímos o valor "20" para o ingresso do cinema e mostramos ele na tela
// Porém, esta semana tem promoção! Como alterar o valor sem precisar declarar uma nova variável e sem substituir o valor padrão do ingresso?
ingressoCinema = 10;
console.log(ingressoCinema);
// O valor foi reatribuido e agora passa a ser "10"; e se quisermos, podemos reatribuir quantas vezes forem necessárias
// Para voltar ao valor original do ingresso, basta deletar a sentença da linha 7 acima

// Mas e se eu quiser que o valor permaneça inalterado? Neste caso utilizamos as Constantes!

const salarioFuncionario = 5000;
console.log(salarioFuncionario);
// No exemplo acima, definimos o valor "5000" para o salário fixo de um determinado funcionário de uma empresa.
// As constantes não podem ter os seus valores reatribuidos; ou seja, os valores não variam e são (como o próprio nome sugere) constantes

// Uma boa prática é somente utilizar o tipo "let" quando for realmente necessário ficar atribuindo novos valores para as variáveis; caso contrário, utilizar sempre as constantes