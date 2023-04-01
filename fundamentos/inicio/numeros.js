let peso1= 1;
let peso2= Number('2')
/*por mais que eu coloquei o numero 2, em um string de texto,
*ela foi definida como number na frente. Então ficou correto*/

let avaliacao1= 9.8123
let avaliacao2= 6.9877

let total= avaliacao1*peso1 +avaliacao2*peso2
let media= total/(peso1+peso2)
console.log(avaliacao1)
console.log(avaliacao2)
console.log('A média foi: '+media.toFixed(2))//
console.log(media.toString()) // transformar o valor em string