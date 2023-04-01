const valores = [5,6,7,8,9] //indices do array, pode ser qualquer coisa separada
//por virgula. 
console.log(valores[0],valores[4])//acessar os elementos do meu array
//posso colocar outro elemento no array
valores[4]=10 // se tornou outro indice do meu array
//preciso definier o indice que ele vai ocupar e o valor que ele vai ser
//poderia colocar valores[7]=10; mas ele falaria os elementos do meu array esta vazio

console.log(valores) 
console.log(valores.length) // para saber quantos elementos tem dentro do array

/*posso adicionar texto no array*/
valores.push({id:3}, 'posso colocar qualquer coisa aqui', null,false)

console.log(valores)
/*formas de retirar valores de dentro do array*/
console.log(valores.pop())// tira o ultimo elemento
delete valores[0]//deletar um valor especifico do array
console.log(valores)

console.log(typeof valores)//tipo object

//oque significa o array é o []
//oque significa o object {}