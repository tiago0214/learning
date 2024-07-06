//diferença, é que eu consigo usar a function soma: mesmo aqui em cima , porque o interpretador do JS, carrega esse tipo de função primeiro.
//não é a mesma coisa para o function expression
console.log(soma(6, 7));
/*console.log(sub(6, 7));*/ // erro

//function declaration
function soma(x, y) {
  return x + y;
}
//function expression
const sub = function (x, y) {
  return x - y;
};
console.log(sub(6, 7));

//named function expression
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(6, 7));
