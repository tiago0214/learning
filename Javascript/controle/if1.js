function soBoaNoticia (nota){
    if(nota>=7){
        console.log('Aprovado!!!' +nota)
    }
}
soBoaNoticia(9)

//JS interpreta automaticamente, se eu não colocar uma expressão relacional. Que oque estiver dentro do parametro da minha função ,junto com o if
//tem que ser verdadeiro. EX:

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('verdade '+valor)
    }
}
seForVerdadeEuFalo()//false
seForVerdadeEuFalo(null)//false
seForVerdadeEuFalo(undefined)//false
seForVerdadeEuFalo(NaN)//false
seForVerdadeEuFalo(0)//false
seForVerdadeEuFalo('')//vazia false
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')//espaço verdadeiro.


