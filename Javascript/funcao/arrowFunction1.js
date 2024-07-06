//função arrow, sempre é anonima. chamar ela depois , somente se eu armazenar em uma var ou const

let dobro = function(a){
    return 2*a
}

dobro = (a) =>{
    return 2*a
}
//return implicito, somente em função em que tenha somente 1 linha
dobro = a => 2*a // return implicito, quando eu tiro o corpo da função {}, tirei os (), só tem um parametro

console.log(dobro(Math.PI))

let ola = function(){
    return 'oiiiii'
}

ola = () => 'oiiiii'
ola = _ => 'oiiiii' //possui parametro

console.log(ola())