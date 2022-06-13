function exemplo(...opa) {
  console.log(opa)
}

exemplo(1, 2, 3, 4, 5, 6)

//exercicio com spread + rest
function adicionar(nomes, ...novosNomes) {
  //rest
  let novoConjunto = [...nomes, ...novosNomes] //spread
  return novoConjunto
}
let nomes = ['Petrus', 'Borges']
let outros = adicionar(nomes, 'Antonio', 'Carlado', 'Joao')
console.log(outros)
