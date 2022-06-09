/*
document.querySelector('.texto').offsetHeight //244px 200+20+2+2
document.querySelector('.texto').offsetWidth //244px 200+20+2+2
document.querySelector('.texto').clientHeight //240px 200+20+20
document.querySelector('.texto').clientWidth //223px 200+20+3 scrollbar=17px
document.querySelector('.texto').scrollHeight //463 tamanho total scrollbar
document.querySelector('.texto').scrollWidth //223 200+20+3 scrollbar=17px

document.querySelector('.texto').scrolltop //posição do scrollbar top em um elemento
document.querySelector('.texto').scrollleft //posição do scrollbar left em um elemento

window.screenY //posição do scrollbar top na janela
window.screenX //posição do scrollbar horizontal na janela

document.querySelector('.texto').scrollTo(0, 0) //posiciona o scrollbar x, y
window.scrollTo(0, 0) //posiciona o scrollbar x, y
*/

//BOTAO DE SCROLLBAR

function subirTela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

function decidirBotaoScroll() {
  if (window.scrollY === 0) {
    //ocultar o botao
    document.querySelector('.scrollbutton').style.display = 'none'
  } else {
    //mostrar o botao
    document.querySelector('.scrollbutton').style.display = 'block'
  }
}

window.addEventListener('scroll', decidirBotaoScroll)
