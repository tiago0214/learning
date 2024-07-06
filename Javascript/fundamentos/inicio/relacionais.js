//quando eu comparo uma coisa a outra, o resultdo é sempre: true or false.
//para comparar 1==1 
console.log('1)' , '1' == 1)// estou preocupando com o valor e não com o tipo.
console.log('2)' , '1' === 1) /* estritmente igual?*//*string e number=diferentes*/
console.log('3)' , '3' !=3)//diferente
console.log('4)', '3'!==3)//estritamente diferente

//lembrar que as variaveis(depende a variavel), são por referência de memória
const d1 = new Date(0)
const d2 = new Date(0)

console.log('5)', d1===d2)
console.log('6)', d1==d2)
/*aqui esta comparando a referência de memória, que eles estão*/

console.log('7)', d1.getTime()=== d2.getTime())
/*aqui ele são numbers, esta comparando isso*/

console.log('8)', undefined==null)
console.log('9)', undefined===null)