//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object JS
console.log(typeof Object,typeof new Object)// Object =função //new Object = criar um objeto a partir de uma função

const obj2 = new Object
console.log(obj2)
//duas opções eu criei um objeto


//entender: niveis de visualização : publica ou privada

function produto (nome,valor,desc){
    this.nome = nome // aqui eu só tornei a variavel para escopo publico. Qualquer um de fora da função pode alterar ela.
    
}