// par identificador/valor 

const saudacao ='olaa!!' //contexto léxico : relacionado em qual contexto, foi definido
// a variavel: por ex: contexto global (objeto window)

function exec(){
    const saudacao= 'faaala!!'
    return saudacao
}
//não tem problema duas variaveis iguais, porque estão em contexto léxico diferente
//aqui o programa tenta buscar primeiro no contexto mais perto e depois no mais longe
//se achar no contexto mais perto , ele para.

const client = {
    nome:'pedro',
    peso: 90,
    idade: 32,
    endereco:{
        logradouro:'rua qualquer coisa',
        numero: 123

    }
}
/* eu poderia ter nomes/chaves/indentificador conflitantes dentro do 'cliente'e 
'endereco', não teria problema porque são contextos diferentes.*/
console.log(saudacao)
console.log(exec())
console.log(client)