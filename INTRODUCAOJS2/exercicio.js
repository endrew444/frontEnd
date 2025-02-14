//1. Configuração do Ambiente
console.log("Ambiente configurado com sucesso!");
 
//2. Trabalhando com Variáveis e Tipos de Dados
let nome = "Endrew";

let idade = 16;

let altura = 1.85;

let programador = true;
 
console.log(nome, idade, altura, programador);
 
let anoNascimento = 2008;

let anoNascimentoStr = String(anoNascimento);

console.log(typeof anoNascimentoStr);
 
let peso = "70";

let pesoNum = Number(peso);

console.log(typeof pesoNum);

//3. Estruturas Condicionais
 
let num1 = Number(prompt("Digite o primeiro número:"));

let num2 = Number(prompt("Digite o segundo número:"));
 
console.log("Soma:", num1 + num2);

console.log("Subtração:", num1 - num2);

console.log("Multiplicação:", num1 * num2);

console.log("Divisão:", num1 / num2);
 
let numero = Number(prompt("Digite um número:"));

console.log(`O número ${numero} é ${numero % 2 === 0 ? "par" : "ímpar"}`);
 
let idadeUsuario = Number(prompt("Digite sua idade:"));

if (idadeUsuario < 16) {

    console.log("Não pode votar.");

} else if (idadeUsuario >= 16 && idadeUsuario < 18) {

    console.log("Voto opcional.");

} else {

    console.log("Voto obrigatório e pode tirar CNH.");

}
 
//4. Estruturas de Repetição

for (let i = 1; i <= 10; i++) {

    console.log(i);

}
 
let numeroTabuada = Number(prompt("Digite um número para a tabuada:"));

for (let i = 1; i <= 10; i++) {

    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);

}
 
let contagem = 10;

while (contagem >= 1) {

    console.log(contagem);

    contagem--;

}

console.log("Feliz Ano Novo!");
 
function boasVindas(nome) {

    return `Olá, ${nome}! Seja bem-vindo(a)!`;

}

//5. Funções

console.log(boasVindas("Endrew"));
 
function calculadora(num1, num2, operacao) {

    switch (operacao) {

        case "+":

            return num1 + num2;

        case "-":

            return num1 - num2;

        case "*":

            return num1 * num2;

        case "/":

            return num1 / num2;

        default:

            return "Operação inválida";

    }

}

console.log(calculadora(10, 5, "+"));

console.log(calculadora(9, 3, "/"));
 
function mediaNotas(nota1, nota2, nota3) {

    let media = (nota1 + nota2 + nota3) / 3;

    return media >= 7 ? "Aprovado" : "Reprovado";

}

//6. Desafios Extras

console.log(mediaNotas(8, 7, 6));
 
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let tentativa = Number(prompt("Adivinhe um número entre 1 e 10:"));

console.log(tentativa === numeroAleatorio ? "Você acertou!" : `Errou! O número era ${numeroAleatorio}`);
 
let pesoUsuario = Number(prompt("Digite seu peso (kg):"));

let alturaUsuario = Number(prompt("Digite sua altura (m):"));

let imc = pesoUsuario / (alturaUsuario * alturaUsuario);
 
console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {

    console.log("Abaixo do peso");

} else if (imc < 24.9) {

    console.log("Peso normal");

} else if (imc < 29.9) {

    console.log("Sobrepeso");

} else {

    console.log("Obesidade");

}
 