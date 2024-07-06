let arraysoma = []
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    
    let num1 = Number(document.querySelector('input#txtn').value)
    let res = document.getElementById('res')
    let input = document.getElementById('txtn')
    if(isNumero(num1) && !inLista(num1,arraysoma) ){
        let ad = document.createElement('option')
        ad.innerHTML+= `O valor <strong>${num1}</strong> foi adicionado`
        res.appendChild(ad)
        arraysoma.push(num1)
        resultado.innerHTML=''
        
    }else{
        alert('Valor inválido')
        
    }
    input.value=''
    input.focus()
}
let resultado =  document.getElementById('resultado')
function final (){
    let maior = arraysoma[0]
    let menor = arraysoma[0]
    let soma = 0
    for(i in arraysoma){
        if(arraysoma[i]>maior){
            maior=arraysoma[i]
        }else if(arraysoma[i]<menor){
            menor=arraysoma[i]
        }
        soma+=arraysoma[i]
    }
    let media = soma/arraysoma.length
    

    
    resultado.innerHTML+=`Temos ao todo <strong>${arraysoma.length}</strong> numeros<br>`
    resultado.innerHTML+=`O maior número informado <strong>${maior}</strong><br>`
    resultado.innerHTML+=`O menor numero informado<strong> ${menor}</strong><br>`
    resultado.innerHTML+=`Somando todos os valores temos <strong>${soma}</strong><br>`
    resultado.innerHTML+=`A média dos valores <strong>${Math.round(media)}</strong><br>`
}