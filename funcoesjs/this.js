//Atividade 2
const pessoa1 = {
    nome: "Cristian",
    idade: 35
}

const pessoa2 = {
    nome: "Luna",
    idade: 46
}

const dog1 = {
    nome: "Jujuba",
    idade: 5
}

const dog2 = {
    nome: "Maggie",
    idade: 3
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

console.log(calculaIdade.call(pessoa1, 5))
console.log(calculaIdade.apply(dog1, [5]))