//posso usar o destruction de modo objeto e array, em uma função. Eu escolho oque for melhor.
//com isso eu não preciso usar a notação ponto, para acessar o variavel que eu quero, de dentro
//do 'objeto'. porque quando eu crio algo, usando o destruction, eu já mando ele retirar de dentro
//da estrutura que ele esta inserido. Ele me entrega os objetos prontos. Ex:

function rand({min=0,max=1000}){ //aqui eu estou usando o operador destruction, com paremetro padrão
    const valor = Math.random() *(max - min ) +min;
    return Math.floor(valor)
    
}/*aqui eu criei um objeto dentro da funcão, {destruction}*/

console.log(rand({min:8,max:10})) //aqui eu estou utilizando um objeto.  

/*posso fazer assim*/
const obj = {min:5,max:10}
console.log(rand(obj))// aqui eu passei o obj'variavel' como paremetro para a função