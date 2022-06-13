let telefone = '5'

console.log(telefone.padEnd(9, '-')) //minimo 9 caracteres e preecnher o resto com -
console.log(telefone.padStart(9, '-')) //minimo 9 caracteres e preecnher o resto com -

let cartao = '1234123412341234'
let lasDigits = cartao.slice(-4)
let cartaoMascarado = lasDigits.padStart(16, '*')
console.log('Seu cartão é: ' + cartaoMascarado)
