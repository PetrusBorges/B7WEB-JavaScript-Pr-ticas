//FUNÇÕES PARAR E COMEÇAR---------------
let timer
function começar() {
  timer = setInterval(showTime, 1000)
}
function parar() {
  clearInterval(timer)
}

//CRIANDO TEMPO FUNCIONAL----------

function showTime() {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  let txt = h + ':' + m + ':' + s

  document.querySelector('.demo').innerHTML = txt
}

// let timer = setInterval(showTime, 1000)
// console.log(showTime())

//CRONOMETRO----------
let timerCronometro
function rodarCronometro() {
  timerCronometro = setTimeout(function () {
    document.querySelector('.demo').innerHTML = 'Rodou'
  }, 2000)
}
function pararCronometro() {
  clearTimeout(timerCronometro)
}
