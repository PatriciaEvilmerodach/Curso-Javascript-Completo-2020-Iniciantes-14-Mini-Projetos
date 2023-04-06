// O Loop For/In é utilizado ao realizar interações com propriedades de elementos em um Array ou Objeto

const perfilFormula1 = { // O nome do objeto é "perfilFormula1". Aqui vamos armazenar todas as informações (propriedades) sobre um dos pilotos

    nomePiloto: 'Charles Leclerc', // Chamamos essas combinações de "Key Value pair". Aqui, "nomePiloto" é a chave e "Charles Leclerc" é o valor atribuído à ela
    titulosMundiais: 0,
    equipe: 'Ferrari',
    posicaoCampeonato2024: undefined,
    corCapacete: null

};

for (let chave in perfilFormula1) { // Aqui iremos acessar todas as chaves dentro do objeto "perfilFormula1"
    console.log(chave); // Repare que o console mostrou na tela somente as Chaves, sem os valores (que podem ser alterados conforme o perfil de pilotos diferentes)
}

// Outro exemplo, desta vez com um Array listando todas as equipes da Formula 1 que estão participando do campeonato em 2023:

let gridFormula1 = ['Ferrari', 'Mercedes', 'Red Bull', 'McLaren', 'Aston Martin', 'Alpha Tauri', 'Alfa Romeo', 'Alpine', 'Williams', 'Haas'];

for (let indice in gridFormula1) { // Aqui iremos acessar o número de índice de cada elemento do Array
    console.log(indice); // O console exibe na tela somente os números de 0 à 9 (pois temos 10 elementos no total)
}

// Mas e se eu quisesse mostrar os nomes das equipes também?

for (let indice in gridFormula1) {
    console.log(indice, gridFormula1[indice]); // Agora o console exibe os valores dos elementos do Array precedidos de seus respectivos índices
}