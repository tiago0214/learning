//quando eu crio a função dentro de uma variavel, nada mais é que eu estou dando um nome a minha função, atraves da variável.
//repara, que eu vou chamar a variavel , somente com o nome dela.
const imprimirResultado = function(nota){
    if(nota>=7){
        console.log('Aprovado!!')
    }else{
        console.log('Reprovado!!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('epa!!')//tomar cuidado(fracamente tipada) //ele vai fazer a comparação e imprimir reprovado

//aqui , nada vai acontecer, diferente da função.
//const teste = 1
//teste
