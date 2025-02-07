//tipo de dados

var nome = "endrew"; //string
var idade = 16; //number
var nota = 9.5; //number
var data; //undefined
var aprovado = true; //boolean
var diploma = null; //nula

// variaveis constantes

var nota1 = 5; //declarar
nota1 = 7; //redefinir
var nota1 = 10; //redeclarar

let nota2 = 8; //declarar
nota2 = 9; //redefinido
//let nota2 = 10 //ERRO não permite redeclarar a nota

const media = 7.5; //declarar
//media = 8 // ao iniciar mostra ERRO
//const media = 8; //ERRO - redeclarar

// operadores Aritimeticos
let a = 10;
let b = 3;
console.log(a+b);//13
console.log(a-b);//7
console.log(a*b);//30
console.log(a/b);//3.33
console.log(a%b);//1

//operadores Relacionais (boolan)

console.log(5<10); //true
console.log("10"==10); //true
console.log("10"===10); //false

//operadores Logicos (E, Ou, Não)
var notaA = 5;
var notaB = 7;

console.log(notaA >= 7 || notaB >= 7); //true
console.log(notaA >= 7 && notaB >= 7); //false
console.log(!true); //false

//Condicionais (if/else , switch(case))

var idade = 25;

if (idade>=18) {
    console.log("Maior de idade");
} else {
    console.log("Menois de idade");
}

var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break
    default:
        console.log("Outro mes")
        break;
}

//loops (for / while /dowhile)

for (let i = 0; i < 5; i++) {
    console.log("iteração: "+i);
}

var condition = true;
var numero = 3;
var contador = 0;
while (condition) {
    let sorteio =Math.random(5)
    contador++
    if (numero == sorteio) {
        console.log("Acertou com" +contador +"tentativas");
        condition = false;
    }
}

//funções - functions

function saudacao(nome) {
    return "Olá"+nome
}

console.log(saudacao("Endrew"));