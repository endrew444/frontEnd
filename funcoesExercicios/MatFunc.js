const readline = require('readline');

// 1. Gerar um número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatório entre 1 e 100:", numeroAleatorio);

// 2. Função para calcular a raiz quadrada de um número
function calcularRaizQuadrada(numero) {
    return Math.sqrt(numero);
}
let numeroParaRaiz = 16; 
console.log(`A raiz quadrada de ${numeroParaRaiz} é:`, calcularRaizQuadrada(numeroParaRaiz));

// 3. Função para retornar o maior entre dois números sem usar "if"
function maiorNumero(num1, num2) {
    return Math.max(num1, num2);
}
let numero1 = 25;
let numero2 = 40;
console.log(`O maior número entre ${numero1} e ${numero2} é:`, maiorNumero(numero1, numero2));

// 4. Pedir ao usuário para inserir um número decimal e exibir os arredondamentos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira um número decimal: ", (numeroDecimal) => {
    numeroDecimal = parseFloat(numeroDecimal);

    console.log(`Número arredondado para cima:`, Math.ceil(numeroDecimal));
    console.log(`Número arredondado para baixo:`, Math.floor(numeroDecimal));
    console.log(`Número arredondado para o inteiro mais próximo:`, Math.round(numeroDecimal));

    rl.close();
});
