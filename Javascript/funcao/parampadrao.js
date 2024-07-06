//estrategia 1 para gerar valor padrão.() || caso não seja definido um valor, ele vai sempre utilizar o padrão. (se o valor for falso, ele também recebe 1)
function soma1(a,b,c){
    a=a || 1 //caso a primeira parte seja falsa, atribui o valor 1
    b=b || 1 //caso a primeira parte seja falsa, atribui o valor 1
    c=c || 1 //caso a primeira parte seja falsa, atribui o valor 1
    return a+b+c
}
console.log(soma1())
console.log(soma1(5))
console.log(soma1(1,2,5))
console.log('fim')
//exemplo de cima: passar 0,0,0 da erro
//estrategia 2,3,4
function soma2 (a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c  //essa é a forma mais segura.
    return a+b+c
}

console.log(soma2(),soma2(2),soma2(6,7,8))
//exemplo de cima: passar 0,0,0 da certo

//agora é o novo modo de parametro padrão do ecmascript 2015
function soma3(a=1,b=1,c=3){
    return a+b+c
}
console.log(soma3(2))

//se atentar, que a ultima forma, é para colocar o valor padrão dentro de um parametro de uma função, e o primeiro(1) modo, pode ser usado para colocar
//valor padrão em uma variavel criada dentro de uma função.



