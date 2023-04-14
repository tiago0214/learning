//criando , por notação literal

const obj1 = {}
console.log(obj1)

//object em JS

console.log(typeof Object,typeof new Object())// pode ser com ou sem ()// new object eu criei um objeto por uma função.
const ob = new Object
console.log(ob)
//aqui eu criei um objeto , a partir de uma FUNÇÃO CONSTRUTORA.
//instanciar o OBJ, quer dizer que eu vou colocar ele com as propriedades já criadas. (por isso o nome é função construtora)


//função construtora
function produto (nome,preco,desc){
    this.nome = nome
    
    this.getPrecoComDesconto = () => {
        return preco* (1-desc)
    }
         
}

const prod1 = new produto ('caneta',7.99,0.15)
const prod2 = new produto ('notebook',2999.99,0.25)

console.log(prod1)
console.log(prod1.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())