let dia = 3
let diaNome = ''

switch (dia) {
  case 1:
    diaNome = 'Segunda-Feira'
    break
  case 2:
    diaNome = 'Terca-Feira'
    break
  case 3:
    diaNome = 'Quarta-Feira'
    break
  case 4:
    diaNome = 'Quinta-Feira'
    break
  case 5:
    diaNome = 'Sexta-Feira'
    break
  case 6:
    diaNome = 'Sábado'
    break
  case 7:
    diaNome = 'Domingo'
    break
}

document.getElementById('dia').innerHTML = 'Hoje é: ' + diaNome

////////////// Segunda forma

let diaNaSemana = 5
let diaNomeNaSemana = ''

switch (diaNaSemana) {
  case 6:
  case 7:
    diaNomeNaSemana = 'Final de semana'
    break
  default:
    diaNomeNaSemana = 'Dia de semana'
    break
}

document.getElementById('diaNaSemana').innerHTML = 'Hoje é: ' + diaNomeNaSemana
