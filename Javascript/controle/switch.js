//lembrar: valores que são passados para o switch , não retorna verdadeiro ou falso.(não é uma expressão relacional.)
//preciso colocar break no final de cada case do switch. Porque se não, a partir do momento que ele entrar na primeira sentença de código, ele depois
//vai entrar em todos os demais. (preciso fazer com que o switch pare de executar os case, caso ele entre em algum.)//o break, é um desvio de fluxo.
//Math.floor = arredonda a nota para baixo.
const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 8: case 7: case 6:
            console.log('aproavado')
            break
        case 5: case 4:  case 3:
            console.log('recuperação')
            break
        case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
             console.log('nota invalida') //como se fosse o else.(caso contrário)posso colocar o default em qualquer lugar dentro do switch, porém tem 
    }                                     //que colocar o break, caso ele não fique no final.
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(0)
imprimirResultado(30)
