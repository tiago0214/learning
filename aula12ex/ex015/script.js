function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value == 0 || Number(fano.value>ano)){
        alert('verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('rsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        //img.setAttribute('id','foto')
        img.style.width= '250px'
        img.style.height= '250px'
        img.style.borderRadius= '50%'
        if(fsex[0].checked){
            genero='Homem'
            if(idade>0 && idade < 10){
                //criança
                img.setAttribute('src','menino_m.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','jovem_m.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','adulto_m.jpg')
            }else{
                //idoso
                img.setAttribute('src','velho_m.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>0 && idade < 10){
                //criança
                img.setAttribute('src','menina_f.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','jovem_f.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','adulto_f.jpg')
            }else{
                //idoso
                img.setAttribute('src','velho_f.jpg')
            }
        }
        res.style.textAlign =`Center`
        res.innerHTML=`Detectamos ${genero}, com ${idade} anos de idade.`

        res.appendChild(img)
    }
}