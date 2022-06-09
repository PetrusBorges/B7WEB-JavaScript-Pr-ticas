let html = ''

let c = 0
while (c <= 50) {
  html += 'Numero: ' + c + '</br>'
  c++
}

//segunda forma

for (let c = 0; c <= 50; c++) {
  html += 'Numero: ' + c + '</br>'
}

document.getElementById('loopWhile').innerHTML = html
