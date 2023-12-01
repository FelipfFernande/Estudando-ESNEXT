function falarDepoisDE(segundos, frase) {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
             resolve(frase)
          }, segundos * 1000)
    })
}

falarDepoisDE(3, 'que legal!')
.then(frase => frase.concat('?!?'))
.then(outrafrase => console.log(outrafrase))