const funcs=[]

for (let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}


/* na variavel com o let, é como se ela tivesse uma memória no momento que o array foi
definido, por isso eu peço para imprimir o indice 2, e ela 'lembra' qual foi o momento
que ele foi definido.*/