//tomar cuidado, em atribuir algum atributo para o this, dentro de um escopo de uma função. Porque esta mechendo no escopo global.
//aqui, o this 'Não é o this.' porque ele aponta para o global.
let comparaComThis = function (param){
    console.log(this===param)
}
comparaComThis(global)

const obj ={}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

               console.log('Funções Arrow')

//Não acontece aqui. Apontar para o escopo global.
//this aqui, aponta para o arquivo em que a função foi definida.

let comparaComThisArrow = param => console.log(this ===param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)//isso aponta, para o objeto.

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//arrow function é mais forte que o bind. Bind não altera onde o this esta vinculado, em uma arrow function.
comparaComThisArrow(module.exports)