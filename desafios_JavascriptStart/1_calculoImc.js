console.log("Cálculo de IMC")

let nome="Aisha"
let peso=51
let altura=1.55

let imc= peso/(altura*altura)

console.log(`Olá, ${nome}, seu IMC é de ${imc.toFixed(1)}`)

if (imc < 18.5){
    console.log("Você está abaixo do peso, procure um médico e nutricionista.")
} else if (imc >18.5 && imc<=24.99) {
    console.log("O seu peso é ideal!")
} else {
    console.log("Você está acima do peso, procure um médico e nutricionista.")
}