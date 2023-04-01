//posso usar as chaves para fazer o bloco, em if. Opcional. POREM, se eu não usar, ele vai ler somente uma sentença de código.
function teste1 (num){
    if(num>=7)
        console.log('Passou')
        console.log('final')
}
teste1(6)
teste1(8)
//Não colocar ponto e virgula, depois do if. Senão , ele não lê.
function teste2 (num){
    if(num>=7);{
        console.log('1')
        console.log('2')
    }
}
