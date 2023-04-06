// Como copiar um objeto com apenas um comando sem precisar copiar/colar todo o código dele?

// Exemplo: Duas pessoas pediram o mesmo lanche, porém uma delas quis adicionar molho e picles
// O restante dos ingredientes permanece igual

const lanche = {
    pao: 'Tradicional com Gergelim',
    carne: 'Bovina',
    queijo: 'Cheddar',
    alface: 'em Folhas',
    tomate: 'em Rodelas',
    cebola: 'em Tiras'
}

console.log(lanche); // Aqui o console exibe o lanche em sua composição original

// Agora vamos pedir o mesmo lanche novamente, mas com as modificações:

const lancheModificado = Object.assign({ // Object.assign vai clonar o nosso lanche e dentro do {} iremos declarar os ingredientes extras
    molhoAdicional: 'Maionese',
    ingredienteAdicional: 'Picles'
}, lanche); // Lembrar de colocar o nome do objeto que está sendo clonado fora do {}, porém dentro do ()

console.log(lancheModificado); // O lanche é exatamente o mesmo, mas agora tem 2 ingredientes adicionais

// Uma forma mais simplificada de clonar o objeto (sem alterar suas características originais) seria:

const objetoClonado = {...lanche};
console.log(objetoClonado);