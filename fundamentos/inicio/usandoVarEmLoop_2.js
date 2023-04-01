const funcs = []

for (var i=0; i<10 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[5]()

//se eu utilizar o exemplo de baixo, eu sempre defino os indices do meu array.
//caso contrário , os elementos do meu array: todos são preenchidos, quando o laço 
//terminar
/*
funcs[0]=20
funcs[2]=30

console.log(funcs)
*/