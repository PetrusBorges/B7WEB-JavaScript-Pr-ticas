//Primeira forma -- com variaveis inulteis
let info = ['Petrus Borges', 'Petrus', 'Borges', '@Petrus']

let [Qualquercoisa, a, j, instagram] = info
console.log(Qualquercoisa, j)

//Segunda forma -- sem variaveis inulteis
let info2 = ['Petrus Borges', 'Petrus', 'Borges', '@Petrus']

let [Qualquercoisa2, , j2] = info
console.log(Qualquercoisa2, j2)

//segunda forma --
let [nome, sobrenome, idade = 25] = ['Petrus', 'Borges']

console.log(nome, sobrenome, idade)

//terceira forma --
function criar() {
  return [1, 2, 3]
}

let [x, y, c] = criar()
console.log(x, y, c)
