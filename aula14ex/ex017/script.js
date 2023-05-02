function calcular(){
    let numero = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
    res.innerHTML=''
    for(c = 0;c<=10;c++){
        let item = document.createElement('option')
        item.value=`res${c}`
        item.text= `${numero} * ${c} = ${numero*c}`
        res.appendChild(item)
    }
}