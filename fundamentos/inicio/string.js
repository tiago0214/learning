const escola= "cod3r" ; //agora eu vou colocar as funções decorrentes da string

console.log(escola.charAt(4))//começa sempre pelo 0-1-2-3-4 letra que esta no indice 4
//da string
console.log(escola.charCodeAt(3))//aqui eu estou pegando o valor do item 3 na tabela
//ask também chamada tabelo unicode-table.com
console.log(escola.indexOf('o'))//aqui é para descobrir onde "o" está na tabela unicode

console.log(escola.substring(1))//imprime do 1, até o ultimo.aqui inclui o 1 até o final
console.log(escola.substring(0,3))// do 0 até o 3 sem incluir o 3

console.log('escola '.concat(escola).concat(' !')) //um modo de concatenar
console.log(escola.replace(3, 'e'))// so funciona para numeros(converter o numero, para letra)
/*posso usar uma expressão regular /\d/*/

//expressoes regulares do rjax
console.log(escola.replace(/\d/g, "B"))// mandei subistituir todos os digitos para B
console.log(escola.replace(/\w/g,'a'))//mandei substituir todos os caracteres.

console.log("joao,ana,maria".split(','))/*estou convertendo uma string em array, e 
utilizando  (',') como o elemento separador*/