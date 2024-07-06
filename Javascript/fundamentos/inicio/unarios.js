//os outros operadores são chamados de infix. Ficam entre dois operandos.
let num1 =1
let num2 =2
num1++
console.log(num1)
--num1
console.log(num1)
// pré-fixado tem preferência frente ao pós-fixado. Ex:*/
console.log(++num1===num2--)/*porque ele acrescente ao num1 primeiro, antes de fazer a 
comparação, enquanto o num2 , faz a comparação primeiro e depois é que ele retira o valor --*/
/*depois disso , já não funciona*/
console.log(num1===num2)