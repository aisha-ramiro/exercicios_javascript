/*Impressão de duas listas de acordo com a declinacao, usando funçoes nativas*/

const chuvaDeMeteoros = [
  { nome: 'Alfa Centaurídeos', declinacao: -59 },
  { nome: 'Gama Normídeos', declinacao: -50 },
  { nome: 'Pi Pupídeos', declinacao: -45 },
  { nome: 'Líridas', declinacao: 34  },
  { nome: 'Eta Aquáridas', declinacao: -1  },
  { nome: 'Eta Líridas', declinacao: 44  },
  { nome: 'Bootídeos de Junho', declinacao: 48  },
  { nome: 'Alfa Capricornídeos', declinacao: -10 },
  { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
  { nome: 'Piscis Austrinídeos',  declinacao: -30 },
  { nome: 'Perseidas',  declinacao: 58  },
]

const chuvaNorte = chuvaDeMeteoros.filter(
  (chuva) => chuva.declinacao >= 0
)

const chuvaSul = chuvaDeMeteoros.filter (
  (chuva) => chuva.declinacao <0
)

const localChuva = function(chuva){
  console.log(chuva)
}

console.log('\n Lista de chuvas de meteoros no hemisfério Norte:\n')
chuvaNorte.forEach(localChuva)

console.log('\n Lista de chuvas de meteoros no hemisfério Sul:\n')
chuvaSul.forEach(localChuva)