/*
let contador =1 
while(contador<=10){
    console.log('contador: '+contador)
    contador++
}

for (let i=1; i<=10 ; i++){
    console.log(`i: ${i}`) //esse acento é a crase.
}
*/
/* a estrutura do for, é a mesma do while. (declaração da variavel; expressão para dizer se continua ou não no laço;incremento )*/

//length: é o tamanho do array.
//o '0' usado no array: é para reprensentar o primeiro indice do array. Quando for incrementando , ele vai aumentando o indice do array.

const notas = [6.7,7.4,9.8,8.1,7.7]
for (let i = 0; i<notas.length; i++){
    console.log(`nota= ${notas[i]}`)
}
// eu criei uma variavel i, com o valor de 0, depois eu pedi para ele verificar se o valor de i é menor que o comprimento do array, e então incrementar
//++, ele fez isso 5 vezes, depois que ele saiu do for, eu pedi para que ele usasse os numeros de i, como indices do meu array.
