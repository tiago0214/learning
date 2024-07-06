//transformando as coisas em object
console.log (typeof Object)
console.log(typeof new Object) // com o 'new', eu tranformo ele em object
//aqui eu instancio uma função e ele me retorna um objeto.

const nome = function(){}
console.log(typeof nome)

const nome2 = function(){} //transformei em object
console.log(typeof new nome2)
nome2()

//criar um class, é uma forma diferente de criar uma função. pois é por baixo dos panos
//uma função. (é somente um modo de enchugar o código.)

class prod1 {}
console.log(typeof prod1)
console.log(typeof new prod1) //instanciei a class"função

/* a forma de criar objeto em javascript , é instanciando funções ou criando literal.*/
