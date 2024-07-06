const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

notasAltas= []
for(let ind in notas){
    if (notas[ind]>7){
        notasAltas.push(notas[ind])
    }
}
console.log(notasAltas)

//*modo de criar isso, com call back*//

//se o resultado for verdadeiro, ele entra na função call back. e adiciona o indice no array.

const notasBaixas2 = notas.filter(function (param){
    return param < 7 
})
console.log(notasBaixas2)

//*com função arrow

const notasBaixas3 = notas.filter((parametro)=> parametro <7)
console.log(notasBaixas3)

/* posso fazer assim */
console.log('Para ficar mais elegante')

const notasMenorQue7 = (nota) => nota<7

const notasBB = notas.filter(notasMenorQue7)
console.log(notasBB)