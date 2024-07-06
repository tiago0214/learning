//Relembrando, function é um tipo, por isso ela tem a opção de usar outras funções dentro dele.(ex:.bind,.call,.apply)
//erro: eu tinha colocado o this.imposto. resultado NaN
function getPreco (imposto = 0 , moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome:'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco()) //chamei o getPreco, por um objeto

const carro = { nome:'Gol', preco: 50000,desc: 0.2}

//console.log(getPreco.call(carro)) // aqui , ele chama a função e passa como contexto o carro.
//console.log(getPreco.apply(carro)) //mesma coisa

//posso passar os parametros direto dentro da função call
//primeira coisa que vai ser usada é o contexto.
//todos os calculos são feitos de acordo com a linha 4 da função. Se eu passar os parametros direto, eu estou passando o imposto e a meoeda
//e como eu já passei o valor do desc, ele vai usar ele na 4 linha da função, como o parametro de carro.
console.log(getPreco.call(carro , 0.17,'%'))

//função apply, utiliza array, para passar os parametros.
console.log(getPreco.apply(carro,[0.17,'%']))
console.log(getPreco.apply(global,[0.17,'%']))
//posso utilizar o escopo global


