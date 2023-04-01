//quando minha função tiver somente um parametro, não preciso de (), na função arrow.
//não posso chamar o retur na função arrow, ele é implicito.
//ternáio. operador que tem 3 parte.
//1: expressão que sempre retorna verdadeiro ou falso. '?'
//2:se a expressão for verdadeira: oque vai retornar
//3: se a expressão for falsa :oque vai retornar
const resultado1 = nota => nota>= 7 ? 'aprovado' : 'reprovado'
 //poderia tambem amarzenar em uma função.
console.log(resultado1(5))
/*
const status = nota => nota>= 7 ? 'aprovado' : 'reprovado'
console.log(status(8))*/


/*posso , ou armazenar em uma const ou retornar em uma função*/

//posso converter em uma função ainda arrow, mas como corpo
const resultado = nota => {
    return nota>= 7 ? 'aprovado' : 'reprovado'}
