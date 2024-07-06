function tratarErroELancar(erro){
    //throw new Error ('Suporte técnico já foi notificado!')
    //throw "mensagem de erro"
    throw{
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }

}                        //essa função vai receber um erro.

function imprimirNomegritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!') //se não conseguir executar vai direto catch
    } catch (e){
        tratarErroELancar(e) //aqui eu defini(e) como parametro, para acessar ele.
    }
    finally{
        console.log('final') // aqui , dando erro ou não, o finally sempre é executado.
    }
}

const obj = {name:'Roberto'}
imprimirNomegritado(obj)

//try{} ... é um bloco de código que pode gerar algum tipo de erro.
//catch(){} é para pegar o erro (fica junto ao try.) dentro do catch, eu posso tentar tratar o erro
/*tratamento de erro
1) try
2) catch (pega o erro)
3) throw joga a nova msg e analisa*/