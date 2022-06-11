let nome = 'Petrus'
let idade = 25

//sem template string
let frase =
  'Meu nome é ' +
  nome +
  ' e eu tenho ' +
  idade +
  ' anos e ano que vem eu faço ' +
  (idade + 1) +
  ' anos'
console.log(frase)

//com template string
let fraseTemplateStings = `Meu nome é ${nome} e eu tenho ${idade} anos e ano que vem eu faço ${
  idade + 1
} anos`
console.log(fraseTemplateStings)
