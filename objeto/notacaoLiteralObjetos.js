//Criação de atributos de um objeto. Não necessidade de duplicidade, quando eu usar o nome da constante. Exemplo.
const a = 1
const b = 2
const c = 3

const obj = {a:a, b:b, c:c} //dei o nome dos atributos o mesmo da const. Então eu não preciso fazer  a: a... posso criar direto.
const obj1 = {a,b,c}

console.log(obj1)

//criar nome de um atributo a partir de um valor de uma variavel.
const jh = 'nota'
const kl = 8.9

const obj2 = {}
obj2[jh] = kl

console.log(obj2)

//posso criar do mesmo jeito, com os valores da minha variavel, como sendo o atributo do objeto

const obj4 = {[jh]:kl}
console.log(obj4)

//formas de criar funções dentro de um objeto.

const obj5 = {
    funcao1: function(){
        //...forma antiga....
    },
    funcao2 (){
        //forma nova (es 2016) (o nome funcao2, é o nome do meu atributo.. mas eu posso criar direto a funcao)
    }
}
console.log(obj5)