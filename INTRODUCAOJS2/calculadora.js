//calculadora simples em java script
var prompt = require("prompt-sync")()
var numero1, numero2, resultado;
var operacao;
var continuar = true;

//funções de operação

function soma(a,b){
    return Number(a+b);
}
function subtracao(a,b) {
  return a - b;
}
function multiplicacao(a,b) {
  return a * b;
}
function divisao(a,b) {
  return a / b;
}

while (continuar) {
    console.log("Calculadora simples")
    console.log("1. soma")
    console.log("2. subtração")
    console.log("3. multiplicação")
    console.log("4. divisão")
    console.log("5. sair")
    operacao = Number(prompt("informe a operaçao desejada:"))
    //pedir os numeros
    numero1 = Number (prompt("informe o primeiro numero:"))
    numero2 =   Number (prompt("informe o segundo numero:"))
    //condição de escolha
    switch (operacao) {
        case 1:
            resultado = soma(numero1,numero2)
            console.log("O resultado é" +resultado)
            break;
        case 2:
            resultado = subtracao(numero1,numero2)
            console.log("O resultado é" +resultado)
            break;
        case 3:
            resultado = multiplicacao(numero1,numero2)
            console.log("O resultado é" +resultado)
            break;
        case 4:
            resultado = divisao(numero1,numero2)
            console.log("O resultado é" +resultado)
            break;
        case 5:
            console.log("saindo...")
            continuar = false
            break;
    
        default:
            console.log("Esse número não é válido")
            break;
    }
}