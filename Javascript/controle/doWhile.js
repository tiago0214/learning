//aqui,eu forço o entrar no bloco de código, mesmo que o valor da minha variavel esteja em -1.porque ele vai verificar o valor do while, somente quando
//sair do bloco.
function getInt (min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao=getInt(-1,10)
    console.log('o valor atribuido foi: '+opcao)
}while (opcao!=-1)
console.log('fim')