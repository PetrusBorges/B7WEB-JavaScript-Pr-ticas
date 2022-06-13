function alertar() {
  console.log('Opa tudo bem? ')
}

let nome = 'Petrus'
setTimeout(alertar, 2000) //callback = condigo assincrono
let sobrenome = 'Borges'
console.log('Nome completo: ' + nome + ' ' + sobrenome)
