//a partir do momento que eu instanciar a função vou ter idade a disposição o atributo idade para que eu posso manipular.

/*function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
new pessoa
*/
//setInterval() dispara outra função depois do intervalo que eu passar.
//setInterval() é uma função: posso inclusive passar dentros dos (parametros), uma função anonima.
//para que isso funcione eu preciso instanciar a partir da função pessoa.
//o this vai variar aqui , porque quem esta chamando essa função é o intervalo.
//por estar executando dentro da função pessoa. O this de fato esta apontando para 'pessoa'

//posso burlar isso > criando uma variavel, e armazenar o this dentro dela. Que vai sempre apontar para a pessoa.

function pessoa (){
    this.idade= 0
    const self =this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}
new pessoa