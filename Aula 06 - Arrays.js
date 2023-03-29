// Arrays são conjuntos de dados que podem ser acessados através de um índice

let gridFormula1 = ['Ferrari', 'Mercedes', 'Red Bull', 'McLaren', 'Aston Martin', 'Alpha Tauri', 'Alfa Romeo', 'Alpine', 'Williams', 'Haas'];
// Aqui temos um Array listando todas as equipes da Formula 1 que estão participando do campeonato em 2023
// Neste caso, inserimos Strings dentro do nosso Array; mas qualquer tipo pode ser inserido: Number, Boolean, etc... Inclusive podemos misturar os tipos, sempre separando os valores com vírgulas

console.log(gridFormula1);
// Repare que o console exibe na tela o nome de cada equipe precedido por um número; este número é o índice de cada elemento do Array
// O índice de um Array sempre vai iniciar no número 0; ou seja, aqui o índice 0 representa o elemento 'Ferrari' (que é a primeira equipe listada)

console.log(gridFormula1[4]);
// Aqui o console exibe na tela o valor "Aston Martin", pois o índice referente à esta equipe é o número 4
// Logo, se a gente quiser acessar um valor específico através do índice, devemos colocar o nome do Array e em seguida o número do índice do elemento entre colchetes

console.log(gridFormula1.length);
// Aqui, estamos listando a quantidade total de equipes no grid da Formula 1; o valor exibido na tela é 10. Este valor é a quantidade de elementos que nós temos no Array