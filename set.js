//nao aceita repeticao/nao indexada

const times =  new Set()
times.add('vasco')
times.add('sao paulo').add('corinthians').add('plameiras')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))