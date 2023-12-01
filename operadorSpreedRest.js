//operador ... rest(juntar)/spred(espalhar)
//usar rest com parâmetro de função


//usar spreed com objeto
const funcionario = {nome: 'Thalita', salario: 12348.99}
const clone = {ativos: true, ...funcionario}
console.log(clone)

//usar spreed com array
const grupoA = ['joão', 'Pedro', 'Gloria']
grupoFinal= ['Thalita', ...grupoA, 'Rafaela']
console.log(grupoFinal)