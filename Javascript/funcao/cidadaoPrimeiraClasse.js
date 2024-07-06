// func(aqui é uma lista de paramentros que fica dentro dos parenteses.)
//pode criar de forma literal.
function fun1 (){}
//armazernar em uma variável.
const fun2 = function(){}
//eu criei uma funcao anonima. mas associei ao uma variavel.
//posso declarar a funcao dentro do array, ou armazenar a funcao criada em uma const,dentro de um array.
const array = [function(a,b){return a+b},fun1,fun2]//para aramazer um funcao criada por meio de uma variavel,dentro de array. Ela precisa ser anonima.
console.log(array[0](2,3)) // aqui eu selecionei o indice 0, do meu array.e coloquei os valores para ele.

// também pode amarzenar funcao ,dentro de atributo de objeto. (nunca esquecer dos parenteses, para ele de fato invocar a função)

const obj = {}
obj.falar= function(){return ('opaaa!!')} //aqui eu coloquei , o falar,como uma função, como atributo do meu objeto.
console.log(obj.falar())

//passar uma função como parametro para outra.
//posso chamar um função dentro da outra, ou criar uma função na hora que eu for chamar ex:
function run (oi){
    oi()//se ou não colocar (), ele não entende que é uma função.
}
//run(function(){console.log('executando...')})
run(function oi(){console.log('teste')})
//reparar que eu criei uma função chamada 'oi' dentro de outra função. e na hora de chamar , eu criei um função anonima.

//uma função pode retornar/conter uma função.
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) //o segundo () é porque o restultado da primeira função retorna outra função, então eu posso passar pra ela o valor entra ()
//eu poderia também armazenar o valor da primeira função em uma variavel. e chamar ela com o valor da outra função.

const valordasoma= soma(2,3)
valordasoma(4)