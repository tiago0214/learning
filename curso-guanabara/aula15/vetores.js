let num1 = [5,4,7,8,2]
for(let i=0;i< num1.length;i++){
    console.log(num1[i])
}
//for in:: muito melhor para isso(lÊ se: para cada posição dentro de in.)

for(let pos in num1){
    console.log(pos)
}
for(let pos in num1){
    console.log(num1[pos])
}