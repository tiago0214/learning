// a função vai carregar consigo o contexto no qual ela foi inserida. Por isso que , mesmo chamando ela por base de outra função. Ela já tem o valor
//atribuido(independente do lugar)

const valor = "global";

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Aqui";
  minhaFuncao(); //mostra, que a função carrega consigo, o lugar em que ela foi definida. Poi isso ela usa o outro valor.
} //ela não leva como base o local de execução, mas sim, o local que ela foi definida.
exec();
