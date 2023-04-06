// Função de Fábrica: Serve para criar um objeto com informações dinâmicas a serem preenchidas posteriormente

// Exemplo: Vamos criar duas novas equipes para a Formula 1

function criarEquipe(nomeEquipe, cor, piloto1, piloto2, pilotoReserva){
    return {
        nomeEquipe, // Repare que os valores não foram definidos, pois são eles que o usuário vai definir
        cor,
        piloto1,
        piloto2,
        pilotoReserva
    }
}

// Criamos uma função para criar Equipe e os parâmetros devem ser preenchidos manualmente
// A vantagem deste método é que podemos aproveitar essa função quantas vezes quisermos, sempre alterando as informações de forma dinâmica
// Utilizando esta única função de fábrica, vamos criar as duas equipes:

const equipe1 = criarEquipe('Scuderia Brasília', 'Amarelo', 'Ayrton Senna', 'Lewis Hamilton', 'Rubens Barrichello');
console.log(equipe1);

// Acima, criamos a equipe 1. O Console mostra na tela todas as propriedades do objeto em formato de Chave-Valor;
// A Chave foi definida pela função de fábrica e o Valor foi declarado pelo usuário

const equipe2 = criarEquipe('Drag Racing', 'Rosa', 'Manila Luzon', 'Plastique Tiara', 'Alaska Thunderpunk');
console.log(equipe2);

// Utilizando a mesma função criada anteriormente, criamos a equipe 2 com valores totalmente diferentes da equipe 1