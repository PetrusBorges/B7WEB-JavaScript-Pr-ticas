//JSON PURO
'{"Nome": "petrus", "idade": 90}'

//JSON PARCE
let pessoa = JSON.parse('{"Nome": "petrus", "idade": 90}') //PEGA A STRING E TRANSFORMA EM JSON => nome: 'petrus', idade: 90

let resultado = {
  lista: ['Petrus', 'Borges', 'Bonito']
}
JSON.stringify(resultado)
//"{"lista": ["Petrus", "Borges", "Bonito"]}"
let res = "{"lista": ["Petrus", "Borges", "Bonito"]}"
let resJson = JSON.parse(res) 
//lista: ['Petrus', 'Borges', 'Bonito']