// A Função é um tipo de referência que controla o fluxo de execução dentro de um software; tanto entrada quanto saída de dados
// Uma boa prática para nomear Funções é seguir o seguinte padrão: Verbo + Substantivo

let corMercedes = 'Black';
// Aqui, definimos a cor do carro da Mercedes inicialmente como sendo Preta

function redefinirCorCarro() {
    corMercedes = 'Silver';
}
// Na função que criamos, decidimos redefinir a cor do carro, que agora passará a ser Prata

console.log(corMercedes);
// Aqui o console mostra a cor original do carro
redefinirCorCarro();
// Em seguida nós chamamos a função que vai redefinir a cor
console.log(corMercedes);
// Então, o console vai passar a mostrar a nova cor do carro

// Podemos também deixar o parâmetro em aberto para escolhermos nosso próprio valor, sem precisar ficar alterando o código dentro da função
// Aliás, esta é a forma recomendada de se trabalhar com funções

let corCapacete = 'Purple';
// A cor inicial do capacete foi definida como Roxa

function redefinirCorCapacete(novaCor) {
    corCapacete = novaCor;
}
// Nesta função, criamos o parâmetro "novaCor" onde o desenvolvedor vai escolher a cor que ele quer quando for chamar esta função

console.log(corCapacete);
// Aqui o console mostra na tela a cor original do capacete (Roxo)
redefinirCorCapacete('Yellow');
// Então, nós chamamos a função e declaramos o parâmetro da nova cor (Amarelo) 
console.log(corCapacete);
// Por fim, o console mostra a nova cor que escolhemos ao chamar a função "redefinirCorCapacete"