//Uma dica. Eu posso instanciar funções também, não somente objeto."Na real, eu não sei muito."
function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado (atributo, pertence somente ao escopo dessa função)

  let velocidadeAtual = 0;

  //metodo publico.
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodo publico.(peguei o atributo privado, e coloquei ele publico. Fiz dessa maneira, para evitar que o usuario altere a variavel.) com o 'this'.
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro(); // uno: agora esta  (com todas as suas propriedades e métodos.)
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const BMW = new Carro(350, 30);
BMW.acelerar();
BMW.acelerar();
BMW.acelerar();
console.log(BMW.getVelocidadeAtual());

//duas instancias a partir de uma função construtora
//uno,BMW : virou objeto que foi instanciado a partir de uma função.
// A função funciona com um molde, e pode criar quantos objetos que quiser, e a partir disso todos os dados da função , só agora do objeto.
