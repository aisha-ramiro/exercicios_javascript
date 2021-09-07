console.log("Sorteio com dados")

let nome="Maria"
let numeroEscolhido=8
console.log(`Olá ${nome}, o seu número escolhido foi o ${8}!`)

let dado1= Math.round(Math.random()*6)
console.log(`O primeiro dado nos deu o número ${dado1}.`)
let dado2= Math.round(Math.random()*6)
console.log(`O segundo dado nos deu o número ${dado2}.`)

let resultado=dado1+dado2
console.log(`O resultado final dos dois dados foi o número ${resultado}.`)

resultado == numeroEscolhido ? console.log("Parabéns, você ganhou!"):console.log("Infelizmente você perdeu")

