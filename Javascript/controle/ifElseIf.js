/*por eu ter usado um number, eu consigo acessar com o this. && mesma coisa que 'e'*/
Number.prototype.entre= function (inicio,fim){
    return this>=inicio && this<=fim
}

const imprimirNota = function(nota){
    if (nota.entre(9,10)){
        console.log('quadro de honra')
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if(nota.entre(6,7.99)){
        console.log('recuperação')
    }else if(nota.entre(0,5.99)){
        console.log('reprovado')
    }else {console.log('nota inválida')}
}
imprimirNota(9)
imprimirNota(8)
imprimirNota(6)
imprimirNota(5)
imprimirNota(4)
imprimirNota(90)


