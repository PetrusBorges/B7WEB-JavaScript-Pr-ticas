//primeira forma

document.querySelector('h1').style.color = 'red'

//segunda forma

let subtitulo = document.querySelectorAll('.subtitulo')
for (let i in subtitulo) {
  subtitulo[i].style.color = 'green'
}
