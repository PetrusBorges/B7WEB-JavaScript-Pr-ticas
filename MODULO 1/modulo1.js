//formas de mostrar (output)

document.getElementById('title').innerHTML = 'É nois'
document.write('Cuidado')

//window.alert('cuidado cara')
//alert('aaaaaaaa')

console.log('A mensagem vai pro console')

//variáveis

var nome = 'petrus'
var idade = 35
console.log(nome)
console.log(idade)

var x = 5
var y = 8
var total = x + y
console.log(total)
console.log(x + y)

var nomeprincipal = 'petrus'
var sobrenome = 'borges'
var nomecompleto = nomeprincipal + ' ' + sobrenome
console.log(nomecompleto)

var nomevar = 'Petrus' //Faz hoisting e pode redefinir
if (nomevar == 'Petrus') {
  var idadevar = 'VAR'
}
console.log(idadevar)

let nomelet = 'Petrus' //Não faz hoisting e pode redefinir
if (nomelet == 'Petrus') {
  let nomelet = 'LET'
  console.log(nomelet)
}

let qualquercoisa = 'Redefenir' //REDEFENIR
qualquercoisa = 'Redefenida'
console.log(qualquercoisa)

const nomeconst = 'Petrus' //Não faz hoisting e não pode redefinir
nomeconst = 'aaaaaaa'
console.log(nomeconst)

//condicionais

var hora = 24

if (hora >= 1 && hora <= 12) {
  console.log('Bom dia')
} else if (hora >= 12 && hora <= 18) {
  console.log('Boa tarde')
} else if (hora >= 18 && hora <= 24) {
  console.log('Boa noite')
}
