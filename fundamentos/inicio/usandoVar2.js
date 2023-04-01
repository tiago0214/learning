var numero =1
{
    var numero=2
    console.log('dentro: ',numero)
}
console.log('fora: ',numero)
/* aqui uma subscreve a outra, foi por causa daquilo que eu falei na usandoVar1.js*/
//porque todas estão dentro do escopo global.


//Aqui estou falando de let
//outra coisa, ele sempre procura no escopo menor, se tem a variavel. Se não estiver
//e no escopo maior, estiver a variavel, então ele vai imprimir a do escopo maior.

let numero1=2
{
    let numero2=3
    console.log(numero1)
}
console.log(numero1)

/* variavel
var= escopo de global e de função
let= escopo global de função e bloco.*/