//array
let numeros = [1, 2, 3, 4]
let outros = [...numeros, 5, 6, 7, 8]
console.log(outros)

//objetos
let info = {
  nome: 'Petrus',
  sobrenome: 'Borges',
  idade: 25
}
let novaInfo = {
  ...info,
  cidade: 'Juazeiro do Norte',
  estado: 'Ceara',
  pais: 'Brasil'
}
console.log(novaInfo)

//function
function adicionarInfo(info) {
  let novasInfo = {
    ...info,
    status: 0,
    tokens: 'ttokens',
    data_cadastro: 'data_cadastro'
  }
  return novasInfo
}
console.log(adicionarInfo({ nome: 'Petrus', sobrenome: 'Borges' }))
