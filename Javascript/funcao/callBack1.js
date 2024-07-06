const fabricante = ['Mercedez','Audi','BMW']

function imprimir (a,b){
    console.log(`${b + 1}. ${a}`)
}
fabricante.forEach(imprimir)
//o forEach. sempre passo pelos ELEMENTOS de array. nome e indice.
//cada elemento que ele encontra no array, ele vai chamar de volta a função imprimir.

/*
exemplo do professor
const fabricantep = ['Mercedez','Audi','BMW']

function imprimirp (nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantep.forEach(imprimirp)
*/

//POSSO FAZER A FUNÇÃO DIRETO, DIRETO NO FOREACH.
fabricante.forEach(function(a){
    console.log(a)
})
