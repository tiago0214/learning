const nums= [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x==5){
        break
    }
    console.log(`${x} valor de x: ${nums[x]}`)
}
//o break/continue não agi em cima de um bloco if: ele agi em cima de um bloco mais próximo a ele, (for,while,switch)//ou seja, ele não sai do bloco if,
// ele sai do for.

//o (continue), quando ele encontrar o indice, ele imterrope e salta para o próximo.

for (y in nums){
    if(y==5){
        continue
    }
    console.log(`${y} Valor de y é: ${nums[y]}`)
}

//rotulo: é usado para fazer um break externo (na criação do rotulo, eu posso colocar qualquer nome) EX:
rotulo: for (a in nums){
    for(c in nums){
        if (a==2 && c==3){
            break rotulo
        }
        console.log(`valor de A: ${a} e Valor de b: ${c} `)           
                    
    }
    
}
