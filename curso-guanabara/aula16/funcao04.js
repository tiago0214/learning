function fatorial (x){
    let valor = 1
    for(c = x ; c>1 ; c--){
        valor=valor*c
    }
    return valor
}
console.log(fatorial(5))