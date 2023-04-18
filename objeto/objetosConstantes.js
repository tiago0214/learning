//A alteração de um objeto, mesmo criado por meio de uma constante. é possivel. Porque o nome é apontando para o mesmo endereço de memória...
//Só não posso apontar para endereços diferentes.

const pessoa= {nome: 'João'}
pessoa.nome ='Pedro'
console.log(pessoa)

Object.freeze(pessoa) //Não consigo mais mecher no objeto

pessoa.nome='Maria'
pessoa.end='Rua: Alguma coisa'

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) //Criei um objeto constante.
console.log(pessoaConstante)