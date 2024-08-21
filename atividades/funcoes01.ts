// ----------------------------------------------------------------
//  EXECUTA USANDO: $ npx tsx atividades/funcoes01.ts
// ----------------------------------------------------------------

// REGRA DE TRÊS

function regraDeTres(tipoGrandeza: 'direta' | 'inversa',
  referente: number, 
  correspondente: number, 
  referenteSemCorrespondente: number) {

    if (tipoGrandeza === 'direta') return (referenteSemCorrespondente * correspondente) / referente

    return (referente * correspondente) / referenteSemCorrespondente
}

console.log(`Regra de três diretamente proporcional: ${regraDeTres('direta', 3, 5, 7)}`)
console.log(`Regra de três inversamente proporcional: ${regraDeTres('inversa', 15, 18, 10)}`)

// MAIOR VALOR ENTRE CINCO NÚMEROS

function maiorValor(nums: number[]) {
  if (nums.length !== 5) throw new Error('É necessário ter 5 números')

  return Math.max(...nums)
}

console.log(
  `Maior valor entre cinco números: ${maiorValor([16, 20, 33, 95, 50])}`,
)

// MENOR VALOR ENTRE CINCO NÚMEROS

function menorValor(nums: number[]) {
  if (nums.length !== 5) throw new Error('É necessário ter 5 números')

  return Math.min(...nums)
}

console.log(
  `Menor valor entre cinco números: ${menorValor([16, 20, 33, 95, 50])}`,
)
