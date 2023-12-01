//tegged templetes = processa o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'Fe'
const situacao = 'aprovado'
console.log(`${aluno} esta ${situacao}`)