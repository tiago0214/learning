//exemplo de call back no browser
//uma função que acessa os elementos a partir de uma tag.. getElementsByTagName()[indice do array que eu quero.]
document.getElementsByTagName('body')[0].onclick= function(e){
    console.log('o evento ocorreu!')
}
//declarei o evento atoa(e), porque eu não usei nada dele.