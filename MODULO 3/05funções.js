function alterar() {
  document.getElementById('titulo').innerHTML = 'Trocou titulo'
  document.getElementById('campo').value = 'trocou campo'
}

alterar()

//SEGUNDA FORMA

function alterar(titulo, campo) {
  document.getElementById('titulo').innerHTML = titulo
  document.getElementById('campo').value = campo
}

alterar('BOBO', 'BABA')

//TERCEIRA FORMA

function somar(x, y) {
  let total = x + y

  return total
}

var resultado = somar(10, 15)
console.log(resultado)
