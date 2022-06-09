let carro = {
  nome: 'fiat',
  modelo: 'Uno',
  peso: '880kg',
  ligado: 'false',
  ligar: function () {
    console.log('Ligando o ' + this.modelo)
    this.ligado = true
    console.log('VRUM VRUM')
  },

  acelerar: function () {
    if (this.ligado == true) {
      console.log('RIIIIIIIIIIIH')
    } else {
      console.log(this.nome + ' ' + this.modelo + ' não está ligado')
    }
  }
}

console.log(carro.nome)
carro.ligar()
carro.acelerar()

let carros = [
  { nome: 'Fiat', modelos: 'Palio' },
  { nome: 'Fiat', modelos: 'Uno' },
  { nome: 'Toyota', modelos: 'Corolla' },
  { nome: 'Ferrari', modelos: 'Spider' }
]
console.log(carros[3].modelos)
