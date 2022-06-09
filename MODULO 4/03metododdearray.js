//toString - transforma array em string

let lista = ['Ovo', 'Banana', 'Chapeu', 'Corante']

let resultadoLista = lista.toString()

console.log(resultadoLista)

//join - transforma array em string

let listaJoin = ['Ovo', 'Banana', 'Chapeu', 'Corante']

let resultadoListaJoin = listaJoin.join('_')

console.log(resultadoListaJoin)

//indexOf - Olha em que posição ta

let listaIndexOf = ['Ovo', 'Banana', 'Chapeu', 'Corante']

let resultadoListaIndexOf = listaIndexOf.indexOf('Chapeu')

console.log(resultadoListaIndexOf)

//pop - Remove o ultimo

let listaPop = ['Ovo', 'Banana', 'Chapeu', 'Corante']

listaPop.pop()

let resultadoListaPop = listaPop

console.log(resultadoListaPop)

//shift - Remove o primeiro

let listaShift = ['Ovo', 'Banana', 'Chapeu', 'Corante']

listaShift.shift()

let resultadoListaShift = listaShift

console.log(resultadoListaShift)

//push - É recomendado

let listaPush = ['Ovo', 'Banana', 'Chapeu', 'Corante']

listaPush.push('Push')

let resultadoListaPush = listaPush

console.log(resultadoListaPush)

//push improvisado -Não é recomendade

let listaImprovisado = ['Ovo', 'Banana', 'Chapeu', 'Corante']

listaImprovisado[0] = 'Ovos'
listaImprovisado[listaImprovisado.length] = 'Ultimo'

let resultadoListaImprovisado = listaImprovisado

console.log(resultadoListaImprovisado)

//Splice - remove um item do array

let arraySplice = ['Ovo', 'Banana', 'Chapeu', 'Corante']

arraySplice.splice(3, 1)

let resultadoarraySplice = arraySplice

console.log(resultadoarraySplice)

//Concat - junta dois array

let arrayConcat = ['Ovo', 'Banana', 'Chapeu', 'Corante']
let arrayConcat2 = ['Prato', 'Colher', 'Forno']

let resultadoarrayConcat = arrayConcat.concat(arrayConcat2)

console.log(resultadoarrayConcat)

//Sort - ordena o array em ordem alfabetica

let arraySort = ['Ovo', 'Banana', 'Chapeu', 'Corante']

arraySort.sort()

let resultadoarraySort = arraySort

console.log(resultadoarraySort)

//Sort - ordena o array em ordem decrescente

let arraySortReverse = ['Ovo', 'Banana', 'Chapeu', 'Corante']

arraySortReverse.sort()
arraySortReverse.reverse()

let resultadoarraySortReverse = arraySortReverse

console.log(resultadoarraySortReverse)

//MAP - Mapeira os itens do array

let listaMap = [45, 4, 9, 16, 25]
let listaMap2 = []

listaMap2 = listaMap.map(function (item) {
  return item * 2
})

let resultadoListaMap = listaMap2

console.log(resultadoListaMap)

//FILTER - filtar os itens do array

let listaFilter = [45, 4, 9, 16, 25]
let listaFilter2 = []

listaFilter2 = listaFilter.filter(function (item) {
  if (item < 20) {
    return true
  } else {
    return false
  }
})

let resultadoListaFilter = listaFilter2

console.log(resultadoListaFilter)

//Every - verifica todos os itens do array

let listaEvery = [45, 4, 9, 16, 25]
let listaEvery2 = []

listaEvery2 = listaEvery.every(function (item) {
  return item < 20 ? true : false
})

let resultadoListaEvery = listaEvery2

console.log(resultadoListaEvery)

//Some - verifica pelo menos um item do array

let listaSome = [45, 4, 9, 16, 25]
let listaSome2 = []

listaSome2 = listaSome.some(function (item) {
  if (item < 20) {
    return true
  } else {
    return false
  }
})

let resultadoListaSome = listaSome2

console.log(resultadoListaSome)

//Find - procura um dado no array e retorna o primeiro item do dado

let listaFind = [45, 4, 9, 16, 25]
let listaFind2 = []

listaFind2 = listaFind.find(function (item) {
  if (item < 16) {
    return true
  } else {
    return false
  }
})

let resultadolistaFind = listaFind2

console.log(resultadolistaFind)

//FindIndex - procura um dado no array e retorna o primeiro item do dado

let listaFindIndex = [45, 4, 9, 16, 25]
let listaFindIndex2 = []

listaFindIndex2 = listaFindIndex.findIndex(function (item) {
  if (item < 16) {
    return true
  } else {
    return false
  }
})

let resultadolistaFindIndex = listaFindIndex2

console.log(resultadolistaFindIndex)
