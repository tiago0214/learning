var x = 8

var res = x % 2 == 0 ? 5:9
//aqui , o valor da minha variavel vai ser atribuido depois do resultado de todas as operações dentro dela. Por isso o valor de 5

console.log(x,res)


function nota (nota){
    return nota >= 7 ? 'APROVADO':'REPROVADO'
}
console.log(nota(7))