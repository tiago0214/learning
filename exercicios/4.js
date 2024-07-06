function dividendoEdivisor (dividendo,divisor){
    let divisao = dividendo/divisor
    let resto = dividendo%divisor
    console.log(`A divisão de: ${dividendo} / ${divisor} = ${divisao.toFixed(0)} e o resto é: ${resto}`)
}
dividendoEdivisor (9,4)