// Com a natureza dinâmica de objetos podemos inserir e deletar informações dentro de um objeto a qualquer momento.

// Por exemplo: Cada equipe da Formula 1 pode utilizar um determinado número de jogos de pneus por fim de semana*

const pneus = {
    macio: 5,
    medio: 3,
    duro: 3
}

console.log(pneus); // Aqui o console exibe os 3 tipos de pneus que estão dentro do objeto

// Estes são os pneus utilizados em pista seca. Vamos adicionar os pneus de chuva, sem alterar o objeto em si

pneus.intermediario = 2;
pneus.molhado = 2

console.log(pneus); // Agora o console mostra, também dentro do objeto, os pneus de chuva que acabamos de adicionar

// Mas a previsão do tempo indica que não vai chover, então quero remover os pneus novos sem alterar o código anterior:

delete pneus.intermediario;
delete pneus.molhado

console.log(pneus); // Pronto, os pneus de chuva foram excluídos; se eu quisesse excluir também os de pista seca, também seria possível


// * Não tenho certeza se as quantidades do exemplo estão corretas, a FIA altera o regulamento todo ano HAHAHA xD