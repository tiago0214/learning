/* é usado para dar uma melhor visualização do texto string, pois ele aceita a quebra
de linha*/

/*concatenação normal*/
const nome = 'maria'
const concatenacao = "olá"+nome+"!"


/*template string*/
const template = ` 
olá 
${nome} !`
//`isso não é aspas simples 
//(oque eu colocar entre chaves, ele vai tentar
//interpretar)
/*ex*/
console.log(`1+1 = ${1+1}`)
console.log("1+1 = " + (1+1)) /*acredito, principal motivo para usar o template
é porque eu não preciso concatenar nada*/

console.log(concatenacao,template)