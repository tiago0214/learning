function calcular(){
    let inicio = Number(document.getElementById('inic').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('pass').value)
    let res = document.getElementById('res')
    let resultado = inicio
    
    if(inicio.length==0 ||fim.length==0 || passo.length==0){
        alert('Erro')
    }else{
        res.innerHTML=`<br>Contando: <br>`
        if(passo<=0){
            alert(`Impossivel de contar considerando passo=1`)
            passo=1
        }
        if(inicio<fim){
            while (resultado <= fim) {
                res.innerHTML += ` ${resultado} \u{1f449} `
                resultado += passo;
        }
    }else{
        let resultado = fim
            while(resultado<=inicio){
                res.innerHTML += ` ${resultado} \u{1f449} `
                resultado += passo;
            }
    }
    res.innerHTML += `\u{1f3c1} `
    }
} 