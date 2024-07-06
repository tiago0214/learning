function construirP (nome){
   this.nome = nome
   this.falar= function(){console.log(`Meu nome é ${this.nome}`)}   
}

const p1 = new construirP('jjj')
p1.falar()

//função construtora sempre tem que ter o this. nos metodos.

function test (nome,idade){
    this.nome =nome
    this.idade = idade

    this.saudacao= function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const nao = new test('tiago',28)
nao.saudacao()

//reparar no fechamento de colchetes (na class é diferente, fecha logo depois do this.idade)
//saudacao recebe outro par de colchetes, fora



