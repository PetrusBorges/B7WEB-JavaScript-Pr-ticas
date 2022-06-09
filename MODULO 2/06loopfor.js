// FOR LOOP

let text = ''

for (let i = 0; i <= 50; i++) {
  text = text + i + '<br/>'
}

document.getElementById('forLoop').innerHTML = text

// FOR LOOP ARRAY

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla', 'Lamborghini']

let html = '<ul>'

for (let i in carros) {
  html += '<li>' + carros[i] + '</li>'
}

html += '</ul>'

document.getElementById('forLoopArray').innerHTML = html
