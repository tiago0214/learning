//global dentro do node: equivale ao window

let a= 123
global.b=54
this.c=90
console.log(global.a)//aqui a var global, não é igual ao browser
console.log(this.a)//mesma coisa ,igual o la de cima.

console.log(global.b)
console.log(this.c)

const test=module.exports === this
console.log(test)
this.c=456
this.d=false
this.e='teste'
console.log(module.exports)
/* pessoas criam mais com o module.exports ao inves do this. Ex:*/
module.exports={e:'teste',f: false,g:'aqui'}
console.log(module.exports)

abc=3
//criando uma variavel maluca, sem var e let.
console.log(global.abc)