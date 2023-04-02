//class nada mais é do que uma function escrito de maneira diferente
class pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar (){
        console.log(`meu nome é ${this.nome} ${this.sobrenome}`)
    }
 }

const p1 = new pessoa ('joão','maria')

p1.falar()
//reparar no fechamento de colchetes


const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const p2 = criarPessoa ('Jhon')
p2.falar()
//aqui na factory, não é necessário o this.

//executar isso no browser, da diferença. Por causa do contexto léxico.