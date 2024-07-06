//parametros e retorno são opcionais. (mesmo que eu passe 2, eu posso deixar sem nenhum, ou então, usar 3)ele ignora, os outros parametros , seu eu 
//passar mais do que eu declarei.
//não fazer desse jeito que eu vou escrever

function area (largura,altura){
    const area = largura*altura
    if(area>20){
        console.log('valor acima do permitido')
    }else {
        return (area)
    }
}
console.log(area(4,2))