//Criação de atributos de um objeto. Não necessidade de duplicidade, quando eu usar o nome da constante. Exemplo.
const a = 1
const b = 2
const c = 3

const obj = {a:a, b:b, c:c} //dei o nome dos atributos o mesmo da const. Então eu não preciso fazer  a: a... posso criar direto.
const obj1 = {a,b,c}

console.log(obj1)