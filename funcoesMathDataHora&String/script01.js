//Funções data e hora
let agora = new Date(); //Instanciando um onj da classe Date()
console.log(agora);
console.log(agora.toLocaleString());

// Funções GET (pego informações)

// Funções SET (Altero informações)

// Funções TO (Imprimir) - Formato de texto

//Manipulação de datas
let data1 = new Date();
let data2 = new Date("2025-12-31");

let diferenca = data2-data1; // miliseconds

console.log(diferenca/(1000*60*60*24))