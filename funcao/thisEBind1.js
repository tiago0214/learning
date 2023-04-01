//sempre lembrar: objeto é uma coleção de chave valor. e eu posso criar de forma rápida, sem ter que falar function falar(){}
//posso utilizar o this para acessar o atributo de um objeto.

const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()//se eu tirar o this, eu não consigo acessar

//posso armazenar o falar(função) dentro de uma variavel
const falar = pessoa.falar// aqui o this esta apontando para um objeto diferente.(eu não estou chamando o falar a partir do contexto pessoa.)
falar()//conflito em paradigmas: entre funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)// o bind é um modo de amarrar um determinado objeto para ele ser o dono da execução,daquele metodo.
 //sempre que for chamdo
falarDePessoa()// reparar em como eu estou chamando a variavel.

// o metodo bind não altera os outros falar, ele retorna outra função e com isso altera somente o contexto dele.