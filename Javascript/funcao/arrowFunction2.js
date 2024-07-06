function pessoa (){
    this.idade = 0
    
    setInterval(()=>{
        this.idade ++
        console.log(this.idade)
    },1000)
    
}
new pessoa

//difernte do outro exemplo. Mesmo chamado por um temporizador, por ser arrow function. O this esta no contexto léxico de pessoa.
//não precisa armazenar o this em uma constante.