const produto = {
    nome: 'Caneta Bick Preta',
    preco: 1.98,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bick Azul';


const produto2 = produto;
produto2.nome = 'Caneta Bick Vermelha';

console.log(produto, novoProduto, produto2);
