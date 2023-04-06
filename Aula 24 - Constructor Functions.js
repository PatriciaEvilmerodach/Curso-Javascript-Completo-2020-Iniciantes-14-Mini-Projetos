// A Função de Construtor tem o mesmo objetivo da Função de Fábrica, porém é escrita de forma diferente:

function Equipe (nomeEquipe, cor, piloto1, piloto2, pilotoReserva) { // Ao invés de utilizar o camelCase para escrever o nome da função, utilizamos Pascal Case
        this.nomeEquipe = nomeEquipe, // Para declarar o objeto dentro da função, utilizamos o padrão "this.nomeDoObjeto"
        this.cor = cor,
        this.piloto1 = piloto1,
        this.piloto2 - piloto2,
        this.pilotoReserva = pilotoReserva
}

const equipe1 = new Equipe('Scuderia Brasília', 'Amarelo', 'Ayrton Senna', 'Lewis Hamilton', 'Rubens Barrichello');
console.log(equipe1);

const equipe2 = new Equipe('Drag Racing', 'Rosa', 'Manila Luzon', 'Plastique Tiara', 'Alaska Thunderpunk');
console.log(equipe2);

// Fica a critério do programador utilizar Factory ou Constructor Function