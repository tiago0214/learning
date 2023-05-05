let arraysoma = []

function adicionar(){
    let num1 = Number(document.getElementById('txtn').value)
    let res = document.getElementById('res')
    if(num1 > 100 || num1< 0 ){
        alert('Valor inválido')
    }else{
        let ad = document.createElement('option')
        ad.innerHTML+= `O valor <strong>${num1}</strong> foi adicionado`
        res.appendChild(ad)
        arraysoma.push(num1)
        
    }
}

function final (){
    let resultado =  document.getElementById('resultado')
    resultado.innerHTML=arraysoma
}