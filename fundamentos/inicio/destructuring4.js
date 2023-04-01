/*lembrar, assim que eu uso a desestruturação, eu não recebo o array, na verdade eu recebo
dois atributos, quando eu tento colocar qualquer coisa dentro do 'array'*/
function rand ([min= 0, max= 1000]){
    if (min>max) [min,max]=[max,min]// min menor que max: inverta : min com max
    const valor= Math.random() * (max-min)+ min
    return Math.floor(valor)
}
/*math.floor, eu estou pedindo para arrendondar para baixo, seil é para cima*/
console.log(rand([min=25,max=10]))

/*como eu estou chamando por um array, eu não preciso chamar pelo nome do atributo do objeto
igual o exemplo passado.*/
console.log(rand([100,150]))
console.log(rand([]))
console.log(rand([990]))
console.log(rand([]))