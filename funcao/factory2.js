function criarProduto(a,b){
    return{
        nome:a,
        idade:b
    }
}
console.log(criarProduto('Anna',25))

//posso fazer assim, porque os nomes dos meus parametros esta estritamente igual ao do criado no objeto.

function criarProduto(nome,idade){
    return{
        nome,
        idade
    }
}
console.log(criarProduto('jose',45))