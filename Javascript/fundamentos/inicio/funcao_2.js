//armazenar uma função em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b)
}
imprimirSoma(1,2)

//armazenando uma função arrow em uma variavel
//=> é a forma de escrver uma funcao arrow
const soma = (a,b) =>{
    return a+b
}
console.log(soma(1,2))

//uma função que deixa implicito o return, a função é sem corpo. Com uma única linha
//não tem como ela ter um bloco de código.
//é uma função arrow
const subtracao = (a,b) => a-b
console.log(subtracao(9, 4))

/*
1=function
2=tiro o function e coloco =>
3= tiro o corpo da função.
*/