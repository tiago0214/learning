/* no java script ela não trabalha como algumas linguagens, que tras que a variavel
fica visivel somente dentro do seu respectivo bloco.
O javascript não importa o bloco.*//*a visuazalição dentro do bloco, é chamado
de visuazalição dentro desse escopo*/
{
    {
        {
            {
                var sera= 'sera ????'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

/* isso não funciona com o let e const. Somente com o var*/
/* isso não funciona dentro do escopo da função*/

function teste(){
    var local = 123;
    console.log(local)
}
teste()
console.log(local)//não consigo chamar a variavel, se o imprimir estiver de fora.
//quando eu crio uma variavel fora de uma função, ela é global. Fica no meu window
//window é um objeto global que armazena tudo que foi declarado fora de função.
//então se eu criar outra variavel com o mesmo nome, ela vai sobescrever a outra 
//variavel/
// é por isso que eu consigo acessar essa variavel de qualquer lugar do meu sistema.