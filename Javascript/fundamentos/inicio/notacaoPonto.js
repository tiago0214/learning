const obj1 = {}

obj1.nome= 'bola'
obj1['nome'] = 'bola2' //As duas são equivalente. uma subscreveu a outra.
console.log(obj1)

function Obj(nome){
    this.nome=nome // por casusa do this. o nome fica visivel fora da function
}                  //quando alguem a instanciar

const obj2 = new Obj ('cadeira')
const obj3 = new Obj('suco')

console.log(Obj.nome) // fica dependente de intanciar ,
console.log(obj2.nome)
console.log(obj3.nome)