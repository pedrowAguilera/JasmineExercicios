// function inteiro(inteiro){
//     if(inteiro %3 == 0){
//         return "Fizz"
//     }
//     if(inteiro %5 == 0){
//         return "Buzz"
//     }

//     return inteiro;
// }

// function escola(nota){
//     if(nota >= 7) {
//         return "Aprovado"
//     } else{
//         return "Reprovado"
//     }
// }

// EXE.1:
// Desenvolva uma aplicação que multiplique três números.
function mult(a, b, c) {
    return a * b * c;
}

// EXE.2:
// Desenvolva uma função dividir que divide dois números, garantindo que não haja divisão por zero.
function divisao(a, b) {
    if(b === 0){
        return "Não é possível dividir por 0"
    } else{
        return a/b
    }
}

// EXE.3:
// Crie uma função celsiusFahrenheit e outra fahrenheitCelsius
function celsiusFahrenheit(c) {
    return c * 1.8 + 32
}
function fahrenheitCelsius(f) {
    return (f - 32) / 1.8;
}

// EXE.4:
// Desenvolva uma função calcularMedia que calcula a média de três números.
function media(a, b, c) {
    return (a + b + c)/3
}

// EXE.5:
// Crie uma função contarCaracteres que retorna o número de caracteres em uma string.
function caracteres(a) {
    return a.length;
}

// EXE.6:
// Crie uma função calculadora que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão).
function calculadora(a, b, c) {
    if(c === "+"){
        return a + b
    } else if(c === "-"){
        return a - b
    }  else if(c === "*"){
        return a * b
    }  else if(c === "/"){
        return a / b
    }
}