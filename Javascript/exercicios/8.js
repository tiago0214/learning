let jogos = [30,40,20,4,51,25,42,38,56,2]



function resultado (param){
    let maiorPontuacao = jogos[0]
    let menorPontuacao = jogos[0]
    let piorJogo = 1
    let quebrarecords = 0
    
    for (let i = 1; i< jogos.length; i++){
        if(jogos[i]>maiorPontuacao){
        maiorPontuacao=jogos[i]
        quebrarecords ++
        }else if(jogos[i]<menorPontuacao){
            menorPontuacao=jogos[i]
            piorJogo =i+1;            
        }
    }
    return [quebrarecords, piorJogo]
    
}
console.log(resultado(jogos))

//console.log(melhorJogo)