function dinheiro (valor1,valor2){
    const soma= valor1+valor2
    const somaformat= soma.toLocaleString('pt-BR',{minimumFractionDigits: 2})//chatgpt me passou isso
    //console.log('R$',soma.toFixed(2))    (assim, era o modo que eu fazia)
    console.log('R$:'+somaformat)
}
dinheiro(0.1,0.2)
