function trocarimagem(filename, animeImage) {
  document
    .querySelector('.imagem')
    .setAttribute('src', '/B7WEB-JavaScript-Training/img/' + filename)
  document.querySelector('.imagem').setAttribute('data-figura', animeImage)
}
function pegarimagem() {
  let manga = document.querySelector('.imagem').getAttribute('data-figura')
  alert('O mangta é: ' + manga)
}
