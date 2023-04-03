// Switch e Case são expressões condicionais para realizar comparações; é utilizado quando precisamos analisar diversos valores para a mesma variável

// Exemplo: Conforme o nível de permissão de um usuário, será exibida no console uma mensagem diferente:

let permissao; // O valor desta variável poderá ser qualquer um entre: Convidado, Comum ou Administrador
permissao = 'comum';

switch (permissao) {
    case 'convidado':
        console.log ('Usuário Convidado: você não pode realizar personalizações ou alterar as configurações');
        break; // Serve para interromper as comparações logo após o valor ser encontrado; assim o computador não fica rodando o comando sem parar 
    
    case 'comum':
        console.log ('Usuário Comum: você pode personalizar o sistema, mas não pode alterar as configurações');
        break;

    case 'administrador':
        console.log ('Usuário Administrador: você tem acesso total ao sistema');
        break;

    default: // Se o valor da variável não for nenhum dentre os acima, a mensagem abaixo será exibida no console:
        console.log('Usuário não reconhecido');
}

// No exemplo acima, o valor 'comum' foi atribuído à variável 'permissão'
// Primeiro o computador verificou se o valor era 'convidado'; como não era, ele continuou a realizar as comparações
// Em seguida o valor foi "trocado" para 'comum'; como esse era o valor atribuído à variável, o computador interrompeu as comparações aqui