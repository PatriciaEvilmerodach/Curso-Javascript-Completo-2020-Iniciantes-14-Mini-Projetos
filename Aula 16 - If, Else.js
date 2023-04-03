// If e Else são expressões condicionais que executam tarefas diferentes em diferentes condições

// Exemplo:
// Se o horário for entre 06:00 e 12:00: Exibir a mensagem "Bom Dia!"
// Se o horário for entre 12:00 e 19:00: Exibir a mensagem "Boa Tarde!"
// Caso contrário: Exibir a mensagem "Boa Noite!"

let horario = 15;

if (horario >= 6 && horario < 12) {
    console.log('Bom Dia!');
}
else if (horario >= 12 && horario < 19) {
    console.log('Boa Tarde!');
}
else {
    console.log('Boa Noite!');
}

// Como o valor da variável é "15", então o console exibiu na tela a mensagem "Boa Tarde!"