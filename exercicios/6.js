function jurosSimples (capital,juros,tempo){
    return capital + (capital * juros * tempo)
    
}
function jurosCompostos(capital,juros,tempo){
    let resultado=capital*( 1 +juros) **tempo
    return resultado.toFixed(0)
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
