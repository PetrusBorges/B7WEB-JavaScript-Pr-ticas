let pessoa = {
  nome: 'Petrus',
  sobrenome: 'Borges',
  idade: 25,
  social: {
    facebook: 'Facebook Petrus',
    instagram: 'Instagram Petrus'
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`
  }
}

/* no lugar de fazer isso
let nome = pessoa.nome
let sobrenome = pessoa.sobrenome
let idade = pessoa.idade
*/

let { nome, sobrenome, idade } = pessoa

//sem a propriedade idade no objeto se adiciona um padrao:
//let { nome, sobrenome, idade = 20 } = pessoa

console.log(nome, sobrenome, idade)

//como pegar objetos dentro de objetos---------------------------------------------
//Forma mais usada
let pessoaObjeto1 = {
  nome: 'Joao',
  sobrenome: 'Alemida',
  idade: 30,
  social: {
    facebook: 'Facebook Joao',
    instagram: 'Instagram Joao'
  }
}

let { facebook, instagram } = pessoaObjeto1.social
console.log(facebook, instagram)

//Segunda forma
let pessoaObjeto2 = {
  nomeObjeto2: 'Joao',
  sobrenomeObjeto2: 'Alemida',
  idadeObjeto2: 30,
  socialObjeto2: {
    facebookObjeto2: 'Facebook Joao',
    instagramObjeto2: 'Instagram Joao'
  }
}

let {
  nomeObjeto2,
  idadeObjeto2,
  socialObjeto2: { instagramObjeto2 }
} = pessoaObjeto2
console.log(nomeObjeto2, idadeObjeto2, instagramObjeto2)

//Terceira forma
let pessoaObjeto3 = {
  nomeObjeto3: 'Joao',
  sobrenomeObjeto3: 'Alemida',
  idadeObjeto3: 30,
  socialObjeto3: {
    facebookObjeto3: 'Facebook Joao',
    instagramObjeto3: {
      url: '@Joao',
      seguidores: 1000
    }
  }
}

let {
  nomeObjeto3,
  idadeObjeto3,
  socialObjeto3: {
    instagramObjeto3: { url: instagramObjeto3, seguidores }
  }
} = pessoaObjeto3
console.log(nomeObjeto3, idadeObjeto3, instagramObjeto3, seguidores)

//Quarta forma com function
let pessoaObjeto4 = {
  nomeObjeto4: 'Joao',
  sobrenomeObjeto4: 'Alemida',
  idadeObjeto4: 30,
  socialObjeto4: {
    facebookObjeto4: 'Facebook Joao',
    instagramObjeto4: {
      url: '@Joao',
      seguidores: 1000
    }
  }
}

function pegarNomeCompleto({
  nomeObjeto4,
  sobrenomeObjeto4,
  socialObjeto4: {
    instagramObjeto4: { url: instagramObjeto4 }
  }
}) {
  return `${nomeObjeto4} ${sobrenomeObjeto4} (Siga em ${instagramObjeto4})`
}

console.log(pegarNomeCompleto(pessoaObjeto4))
