let num = [5,3,7]
num[3]=6
num.push(9)
console.log(num)
//lembrar: metodo(), atributo(não tem parenteses)
console.log('--------------------')
let num1 = [5,4,7,8,2]
num1.sort()
console.log(num1)
console.log(`O meu vetor tem ${num1.length}`)
console.log(`O primeiro valor do meu vetor é ${num1[0]}`)

console.log('O valor de 7, esta na posição: '+num1.indexOf(7))

let posi = num1.indexOf(2)

if (posi== -1){
    console.log('O valor procurado não foi encontrado')
}else{
    console.log('O valor de 2 esta na posição: '+posi)
}