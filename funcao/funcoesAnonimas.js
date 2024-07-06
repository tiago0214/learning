const soma = function (x,y){
    return x+y
} 

let imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(5,4)
imprimirResultado(6,7,soma)
imprimirResultado(10,9,function(x,y){
    return x-y
})//*dentro do parametro, eu passei outra função
imprimirResultado(7,8,(a,b) => a*b)
//*não tem como dar nome para uma função arrow

const pessoa = {
    falar: function nome (){
        console.log('Opaa')
    }
}

pessoa.falar()
pessoa.falar(console.log('falar qualquer cosis'))//*se atentar , que eu escrevi outra coisa , quando eu chamei a função

//*posso fazer assim
const pessoa2 = {
    falar(){
        console.log('Opaa 2')
    }
}
pessoa2.falar()