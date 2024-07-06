/*closure é o escopo criado quando uma função é declarada.
 *Esse escopo permite a função acessar e manipular variaveis externas à função*/

//Contexto léxico em ação!!
/*a função lembra das suas origens*/

const x = "global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();

console.log(minhaFuncao());
