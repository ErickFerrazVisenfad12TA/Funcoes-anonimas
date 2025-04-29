// Função anônima comum / antiga
 
 let mensagem = function() {
    console.log("Bem-vindo(a)!")

}


let somar = function(valor1, valor2) {
    return valor1 + valor2
}

console.log(mensagem())
console.log(somar(10, 20))

// Arrow function
 
let mensagem = () => {
    console.log("Olá, tudo bem?")

}

let somar = (valor1, valor2) =>  valor1 + valor2


let raizQuadrada = valor1 =>  Math.sqrt(valor1)




console.log(mensagem)
console.log(somar(25, 800))
console.log(raizQuadrada(4))