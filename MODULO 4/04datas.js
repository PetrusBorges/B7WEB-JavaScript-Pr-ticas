//primeira forma

let d = new Date()

console.log(d)

//segunda forma

let dDateString = new Date()

console.log(dDateString.toDateString())

//terceira forma

let dDateUTC = new Date()

console.log(dDateUTC.toUTCString())

//quarta forma

let dDatetoString = new Date()

console.log(dDatetoString.toString())

//quinta forma

let dDateAtual = new Date(2020, 7, 12, 12, 00, 30)

console.log(dDateAtual.toString())

//sexta forma ------- mais usada

let dDateMaisUsada = new Date('2020-01-12 14:50:30')

console.log(dDateMaisUsada.toString())

//MANIPULANDO ------------------------------------------------------------
//PEGANDO SOMENTE O ANO

let dManipula = new Date()

let novoValor = dManipula.getFullYear()
console.log(novoValor)

//PEGANDO SOMENTE O MES

let dManipulaMes = new Date()

let novoValorMes = dManipulaMes.getMonth()
console.log(novoValorMes)

//PEGANDO SOMENTE O DIA DA SEMANA

let dManipulaDay = new Date()

let novoValorDay = dManipulaDay.getDay()
console.log(novoValorDay)

//PEGANDO SOMENTE O DIA ATUAL DA SEMANA

let dManipulaDayAtual = new Date()

let novoValorDayAtual = dManipulaDayAtual.getDate()
console.log(novoValorDayAtual)

//PEGANDO SOMENTE A HORA

let dManipulaHora = new Date()

let novoValorHora = dManipulaHora.getHours()
console.log(novoValorHora)

//PEGANDO SOMENTE OS MINUTOS

let dManipulaMinutos = new Date()

let novoValorMinutos = dManipulaMinutos.getMinutes()
console.log(novoValorMinutos)

//PEGANDO SOMENTE OS SEGUNDOS

let dManipulaSegundos = new Date()

let novoValorSegundos = dManipulaSegundos.getSeconds()
console.log(novoValorSegundos)

//PEGANDO HORARIO ATUAL SEM DEFINIR OBJETOS

let novoValorAtualDay = Date.now()
console.log(novoValorAtualDay)

//MANIPULANDO

let dayManipulacao = new Date()

dayManipulacao.setHours(dayManipulacao.getHours() + 20)

let resultadoManipulacao = dayManipulacao
console.log(resultadoManipulacao)
