function verde() {
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.remove('azul')
  document.querySelector('#exemplo').classList.add('verde')
}
function vermelho() {
  document.querySelector('#exemplo').classList.remove('azul')
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.add('vermelho')
}
function azul() {
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.add('azul')
}

//SEGUNDA FORMA

function verde() {
  limpar()
  document.querySelector('#exemplo').classList.add('verde')
}
function vermelho() {
  limpar()
  document.querySelector('#exemplo').classList.add('vermelho')
}
function azul() {
  limpar()
  document.querySelector('#exemplo').classList.add('azul')
}
function limpar() {
  document.querySelector('#exemplo').classList.remove('verde')
  document.querySelector('#exemplo').classList.remove('vermelho')
  document.querySelector('#exemplo').classList.remove('azul')
}

//TROCAR DE COR

function trocar() {
  if (document.querySelector('#vaievolta').classList.contains('preto')) {
    document.querySelector('#vaievolta').classList.remove('preto')
    document.querySelector('#vaievolta').classList.add('rosa')
  } else {
    document.querySelector('#vaievolta').classList.add('preto')
    document.querySelector('#vaievolta').classList.remove('rosa')
  }
}
