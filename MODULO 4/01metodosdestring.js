//CONTAGEM - conta quantas letras tem na string

let nome = 'Petrus Borges Machado'

let resultado = nome.length

console.log(resultado)

//CONTAGEM SEGUNDA FORMA - conta quantas letras tem na string

let nome1 = 'Petrus Borges Machado'

let resultado1 = nome1.indexOf('Borges')

console.log(resultado1)

//CONTAGEM IF

let nomeCompleto = 'Nome Completo'

let resultadoNome = ''

if (nomeCompleto.indexOf('Completo') > -1) {
  resultadoNome = 'Achou'
} else {
  resultadoNome = 'Não achou'
}

console.log(resultadoNome)

//SLICE E SUBSTRING E SUBSTR-----------------------------------------------------------------------

let slice = 'Petrus Borges Machado'

let resultadoSlice = slice.slice(4, 6)

console.log(resultadoSlice) //SLICE

let sliceNegativo = 'Petrus Borges Machado'

let resultadoSliceNegativo = sliceNegativo.slice(-10, -1)

console.log(resultadoSliceNegativo) //SLICE NEGATIVO

let substring = 'Petrus Borges Machado'

let resultadoSubstring = substring.substring(4, 6)

console.log(resultadoSubstring) //SUBSTRING

let substr = 'Petrus Borges Machado'

let resultadoSubstr = substring.substr(1, 10)

console.log(resultadoSubstr) //SUBSTR

// REPLACE - UPPERCASE - LOWERCASE - TRIM - CHARAT - SPLIT -

let nomeReplace = 'Petrus Borges Machado'

let resultadoReplace = nomeReplace.replace('Borges', 'Silva')

console.log(resultadoReplace) //REPLACE
console.log('Nome: ' + nomeReplace) //REPLACE CONTATENAR
console.log('Nome: ' + resultadoReplace) //REPLACE CONTATENAR

let nomeUppercase = 'petrus borges machado'

let resultadoUppercase = nomeUppercase.toUpperCase('petrus borges machado')

console.log(resultadoUppercase) //UPPERCASE

let nomeLowercase = 'petrus borges machado'

let resultadoLowercase = nomeLowercase.toLowerCase('PETRUS BORGES MACHADO')

console.log(resultadoLowercase) //LOWERCASE

let nomeConcat = 'Petrus'

let resultadoConcat = nomeConcat + ' Borges'

console.log(resultadoConcat) //CONCAT

let nomeTrim = 'Petrus      '

let resultadoTrim = nomeTrim.trim()

console.log(resultadoTrim) //TRIM

let nomeCharAt = 'Petrus'

let resultadoCharAt = nomeCharAt.charAt(0)

console.log(resultadoCharAt) //CHARAT

let nomeArray = 'Petrus'

let resultadoArray = nomeArray[0]

console.log(resultadoArray) //BUSCANDO POSIÇÃO NUM ARRAY

let nomeSplit = 'Petrus Borges Machado'

let resultadoSplit = nomeSplit.split(' ')

console.log(resultadoSplit) //SPLIT GERANDO ARRAY EM UMA STRING
