//para cada elemento do meu array, ele vai me devolver um indice 'i'
//oque recebe com esse for/in : não é o numero das notas, mas sim o número dos array, por isso precisa colocar console.log(notas[kkjk])
const notas = [6.7,7.4,9.8,8.1,7.7]

for(/*let*/kkjk in notas){
    console.log(notas[kkjk])
}
//eu consigo pegar os atributos(indices) de um array. Eu consigo fazer o mesmo com um objeto.

const pessoa = {
    nome:'ana',
    peso:'64',
    idade: 29,
    sobrenome:'luiza'

}

for (/*let*/qualquernomeaqui in pessoa){ 
    console.log(`${qualquernomeaqui} = ${pessoa[qualquernomeaqui]}`) 
}
//eu usei o 'qualquernomeaqui' para dizer, que qualquer coisa que eu colocar, dentro do for/in. Sera considerado os atributos do meu objeto.
console.log(qualquernomeaqui)//posso usar o let dentro da variavel, para não deixar o ultimo nome, com o valor da minha variavel.