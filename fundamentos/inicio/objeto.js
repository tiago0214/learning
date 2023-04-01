//oque significa o array é o []
//oque significa o object {}
const prod1= {} //posso defini-lo vazio e ir alterando dinamicamente


prod1.nome='celular ultra mega'
prod1.valor= 5642
prod1['Desconto legal']= 0.40 // ele vai imprimir, mas não consigo colocar para imprimir
//somente o desconto: só consigo chamar tudo do prod1

console.log(prod1)

/*outro jeito de criar, é colocar direto dentro das chaves*/

const prod2={
    nome:'Camisa Polo',
    preco: 79.8,
    cor: 'preta',
    obj:{
        blabla:1,
        obj:{
            blabla:1
        }
    }
}
console.log(prod2)

/*o nome único, tem que ser dentro do mesmo objeto*/
//o identificador do objeto pode ser varias coisas, string,função,number.
//entender a diferença entre json e objeto, porque json é em formato textual.
//json: é para trocar dados entre sistema.