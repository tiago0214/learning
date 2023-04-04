function compras (trabalho1,trabalho2){
    const comprarsorvete = trabalho1 || trabalho2 /* ou*/
    const comprarTv50= trabalho1 && trabalho2 /*e */
    const comprarTv32=trabalho1!=trabalho2 /*diferente*/
    const manterSaudavel= !comprarsorvete //operador unário
    return{comprarsorvete,comprarTv50,comprarTv32,manterSaudavel}
    /*return{comprarsorvete:comprarsorvete, (poderia colocar outro nome,na chave.)
            comprarTv50:comprarTv50,
            comprarTv32:comprarTv32,
            manterSaudavel:manterSaudavel}*/

}
console.log(compras(true,true))
/*operador curto circuito: a partir do primeiro operando, já sabe o resultado.*/
/*no diferente, eu estou simulando um 'ou' exclusivo. somente um ou o outro
posso fazer dessa maneira também.
const comprarTv32= !!(trabalho1ˆtrabalho2)
Eu utilizo o !! para converter em valor boolean */
/*lembrar: javaScript só aceita um retorno, então tenho que colocar tudo dentro de um
retorno só*/
/*no return, eu criei um objeto. Eu não preciso criar sempre como uma constante.
outra coisa, eu não coloquei valor dos objetos, eu somente os criei. porém por ser um 
recurso do proprio JS, é como se ele tivesse feito sozinho isso pra mim
return{
    comprarsorvete:'comprarsorvete',
    comprarTv50:'comprarTv50',
    compraTv32:'comprarTv32',
    mantersaudavel:'mantersaudavel'
}
*/