//toda função tem um array interno (arguments), quando nenhum parametro é passado , esse array fica vazio.
//essa forma que eu vou fazer, tem um forma mais recente.
//arguments, é usado para recuperar os parametros de uma função: que não foi passado. (só usa o arguments, na função que não foi passado nenhum parametro)
//duvida?? a função ignora, se eu colocar parametros depois que não foram declarados. Porém, se eu usar o arguments, consigo recupar esses parametros ?
function soma (){
    let soma = 1
    for (i in arguments) {// eu fiz um for/in em cima de arguments, para acessar os elementos que foram passados para a função
        soma += arguments[i]
    }
    return soma
}
//arguments, tem a possibilidade de pegar todos os parametros que foram passados para a função. (e fazer qualquer tipo de operação.)
//a função pode ter esses valores definidos como parametros quando eu criei a função ou então, posso pegar quando usar o console.log.
console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4,5,6,7))