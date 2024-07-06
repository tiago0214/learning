//Math.random gera um valor entre 0 e 1

function getInt (min,max){
    const valor = Math.random() *(max-min) + min
    return Math.floor(valor)
}

let opcao

while (opcao != -1) {
    opcao = getInt(-1,10) 
    console.log('numero escolhido foi: '+opcao)   
}
console.log('Até a próxima!!')