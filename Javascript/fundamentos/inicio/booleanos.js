//varias coisas no JS gera resultado verdadeiro ou falso

//posso definir literal false ou true para a variavel
let isAtivo = false;
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) /*posso usar a negação para transformar um valor em verdadeiro 
ou falso(transformando qualquer coisa eu verdadeiro ou falso)
 (o sinal de "!" é uma negação do se eu repetir "!", eu anulo
pois eu pesso não, duas vezes)*/

console.log(true) //posso colocar o true e false literal
 /* se atentar a hipoteses de coisas que são consideradas verdadeiras ou falsas */

// Ex:
console.log(!!' ') // com espaço dentro, é verdadeiro
console.log(!!'')//string vazia , é falso.
/* isso é bom para verificar se um campo foi preenchido como deve ser, se nada foi 
digitado, consigo atribuir automaticamente false, se teve pelo menos um espaço
eu consigo falar que os dados estão errados.*/

/*praticar um pouco a complexidade*/

let nome= ''
console.log(nome||'desconhecido')/* aparecer desconhecido porque o nome retornou
como falso, por isso ele foi direto para a string*/