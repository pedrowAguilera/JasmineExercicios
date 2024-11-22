// //TESTE FIZZ BUZZ
// it("Teste: Fizz Buzz", function () {
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe("Fizz");
//     expect(inteiro(4)).toBe(4);
//     expect(inteiro(5)).toBe("Buzz");
//     expect(inteiro(6)).toBe("Fizz");
//     expect(inteiro(7)).toBe(7);
//     expect(inteiro(8)).toBe(8);
//     expect(inteiro(9)).toBe("Fizz");
//     expect(inteiro(10)).toBe("Buzz");
// });

// //TESTE ESCOLA
// it("Teste: situação do aluno", function(){
//     expect(escola(5)).toEqual("Reprovado");
//     expect(escola(9)).toEqual("Aprovado");
// })


// EXE.1:
// Desenvolva uma aplicação que multiplique três números.
it("Multiplicação", function () {
    expect(mult(2, 3, 4)).toBe(24);
    expect(mult(1, 5, 2)).toBe(10);
    expect(mult(1, 0, 3)).toBe(0);
})

// EXE.2:
// Desenvolva uma função dividir que divide dois números, garantindo que não haja divisão por zero.
it("Divisão", function () {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(7, 0)).toBe("Não é possível dividir por 0");
})

// EXE.3:
// Crie uma função celsiusFahrenheit e outra fahrenheitCelsius
it("CelsiusFahrenheit", function () {
    expect(celsiusFahrenheit(0)).toBe(32);
    expect(celsiusFahrenheit(100)).toBe(212);
});
it("FahrenheitCelsius", function () {
    expect(fahrenheitCelsius(32)).toBe(0);
    expect(fahrenheitCelsius(212)).toBe(100);
});

// EXE.4:
// Desenvolva uma função calcularMedia que calcula a média de três números.
it("Média", function () {
    expect(media(3, 4, 5)).toBe(4);
    expect(media(10, 20, 30)).toBe(20);
});

// EXE.5:
// Crie uma função contarCaracteres que retorna o número de caracteres em uma string.
it("Caracteres", function () {
    expect(caracteres("Hello")).toBe(5);
    expect(caracteres("12345")).toBe(5);
});

// EXE.6:
// Crie uma função calculadora que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão).
it("Calculadora", function () {
    expect(calculadora(4, 2, "+")).toBe(6);
    expect(calculadora(4, 2, "/")).toBe(2);
});