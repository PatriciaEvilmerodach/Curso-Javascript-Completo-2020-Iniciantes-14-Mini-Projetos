// Template Literal, como o nome sugere, serve para escrever uma string com sua formatação literal; com todas as quebras de linha, caracteres especiais ou mensagem dinâmica, sem poluir o código
// Para utilizar o template literal basta utilizar ` ` ao invés de ' ' ao escrever a String

// Exemplo: Vamos enviar um e-mail para os usuários, mas cada e-mail vai ter uma saudação dinâmica mencionando o nome do usuário

const usuario = 'Patricia' // Aqui vamos guardar o nome do usuário que será utilizado a seguir

const email =
`
Olá, ${usuario}.

Você acabou de receber um e-mail que foi escrito utilizando
                >>> Template Literal <<<

Atenciosamente,
Javascript
`;

// Para personalizar o nome do usuário na saudação, foi necessário declarar o nome da variável dentro das chaves em $ { }

console.log(email); // Repare que o console exibe a mensagem exatamente da forma que foi escrita