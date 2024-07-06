/*desestruturar array []*/
const [a] = [10]
console.log(a) 
/*aqui eu já criei desestruturado. ou seja, já conseguindo usar a variavel de fora*/

const [n1,,n3,,n5,n6]=[10,7,9,8]
console.log(n1,n3,n5,n6)
/*se eu não criar com a [],eu não consigo fazer a inter-relação entre os elementos do array*/
/*eu posso criar o array assim, para criar ex: 4 variaveis rapido*/

const [,[,nota]]=[[8,8,9],[1,2,3]]
console.log(nota)
