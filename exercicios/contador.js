var notas = [7,8,10,15,16,,3,2,5];
var total_pares =0;
var total_impares=0;
var contador=0;

while (contador<notas.length) {
    if (notas[contador]% 2 == 0 )
    {
        total_pares++;
    } else {
        total_impares++;
    }
};

contador++;

console.log("O total de números pares é de " + total_pares);
console.log("O total de números ímpares é de" + total_impares);
