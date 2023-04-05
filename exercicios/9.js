function receberNota (nota){
    let corrigido = arredondar(nota)
    if (corrigido>=40){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

function arredondar (nota2){
    if(nota2 % 5/2){
        return nota2 + (nota2 % 5)
    }else {
        return nota2
    }
}
receberNota(100)
receberNota(30)
console.log('--------------------')
receberNota(38)
console.log('--------------------')
receberNota(88)
receberNota(61)