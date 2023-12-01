//ES8:  object.value
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = 'felipe'
const pessoa ={
    nome,
    ola(){
        return 'salve rapaziada'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal{
    falar() {
        return 'au au'
    }
}

console.log(new Cachorro().falar())