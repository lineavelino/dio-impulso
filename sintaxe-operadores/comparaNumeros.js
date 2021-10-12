function comparaNumeros(num1, num2) {
    let iguais = ''
    let soma = num1 + num2
    let maior10 = ''
    let maior20 = ''

    if (num1 == num2) {
        iguais = 'são iguais'
    } else {
        iguais = 'não são iguais'
    }

    if (soma > 20) {
        maior10 = 'maior'
        maior20 = 'maior'
    } else if (soma > 10) {
        maior10 = 'maior'
        maior20 = 'menor'
    } else {
        maior10 = 'menor'
        maior20 = 'menor'
    }

    return console.log(`Os números ${num1} e ${num2} ${iguais}. Sua soma é ${soma}, que é ${maior10} que 10 e ${maior20} que 20.`)
}

comparaNumeros(1, 1)
comparaNumeros(1, 2)
comparaNumeros(7, 7)
comparaNumeros(8, 13)