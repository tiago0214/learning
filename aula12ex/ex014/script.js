function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var fundo = document.body
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if(hora>=0 && hora<=12){
        img.src = 'manha.jpg'
        fundo.style.background='#e2cd9f'
    }else if(hora>12 && hora<=18){
        img.src = 'tarde.jpg'
        fundo.style.background='#b9846f'
    }else{
        img.src = 'noite.jpg'
        fundo.style.background='#515154'
    }
}