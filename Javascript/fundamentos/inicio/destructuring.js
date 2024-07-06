//forma de retirar algo de dentro de uma estrutura. (exemplo dentro de um objeto){}
const pessoa = {
    nome: 'anna',
    idade: 5,
    endereco:{
        logradouro: 'rua legal',
        numero: 1000
    }

}
/*o jeito tradicional de retirar as coisas de dentro desse objeto, seria , por meio da
notação ponto, ex: console.log(pessoa.nome)=*/
const {nome,idade} = pessoa /* estou falando para tirar de dentro do objeto 'pessoa' os 
atributos(nome ,idade): reparar que eu não criei uma variavel. eu somente sinalizei pelo
sinal de desestruturação{} que eu queria desestruturar um objeto criando em uma constante*/
/*quando eu faço isso, é como se eu tivesse criado 2 variaveis.*/
console.log(nome,idade)
const{nome:n,idade:i} =pessoa /*aqui eu renomei as variaveis que sairam*/
console.log(n,i)

const{sobrenome,bemHumorada= true} =pessoa
console.log(sobrenome,bemHumorada)
/*estou tentando retirar uma variavel eu não existe. e em bemhumorada, eu coloquei para
aparecer true, caso ela não seja encontrada. Não posso definir qualquer nome aqui(null,undefined)*/

const{endereco:{logradouro,numero}} = pessoa