/* uma funcão é uma bloco de código que eu posso deixar guardado e depois utilizar
em algum momento específico do meu algoritimo. Pode retornar alguma coisa, como 
também ela pode não retornar nada */
//entender a função como um verbo(executa algo), associação com uma receita de bolo.
//a receita propriamente, é como se fosse a função . ela faz tudo e entrega o resultado

function imprimirSoma(a,b){
    console.log(a+b)
}
/* esta funcão ai de cima não retorna nada, eu preciso chamar ela.*/
imprimirSoma(9,7)//aqui eu não preciso colocar entre ""
imprimirSoma("qualquer coisa aqui: ","lembrar que string é entre, aspas")
/*imprimirSoma é o nome da função.. (a,b) São os nomes das variaveis, não preciso 
colocar nada ,como "var ou const ou let" se eu colocar numeros inteiros, nas entradas
de valores de a,b , ele vai fazer a soma, se eu colocar string ele vai fazer a 
concatenção dos nome*/
//se eu não preencher o 'b', ele vai retornar,undefined.
//b=0, ele vai fazer a soma normal.

/*função com retorno*/
//nessa função , se b não for definido,ele vai receber 5
function soma(a,b=5){
    return a+b
}
//preciso colocar console.log, porque a única coisa que essa função vai fazer é
// retornar um valor.

console.log(soma(2,3))
console.log(soma(2))
// se eu não definir nada em 'a', ele vai retornar NaN