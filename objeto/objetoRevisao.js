//objeto: coleção dinâmica de chave/valor
//operador NEW : é para criar um objeto.
//Object: éuma função 
//quando utiliza o NEW + UMAFUNÇÂO : instancia a função 

const produto = new Object
produto.nome = 'cadeira'
produto.preco= 220
produto['Marca do produto']= 'generica'

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

console.log('--------------------------')

const carro= {
    nome: 'A4',
    valor: 89000,
    proprietario:{
        nome:'Raul',
        idade: 54,
        endereco:{
            logradouro:'Rua ABC',
            numero:123
        }
    },
    condutores:[{   //aqui eu criei um objeto dentro de um array.
        nome:'Junior',  
        idade:19
    },{
        nome:'Anna',
        idade: 42
    }],
    calcularValorSeguro:function(){
        //...
    }
}
//alterar os valores
carro.proprietario.endereco.numero= 1000
console.log(carro)

//console.log('-----------------------------')
//delete carro.condutores
delete carro.calcularValorSeguro


console.log(carro.condutores.length)