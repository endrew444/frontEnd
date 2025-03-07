// Array e Matrizes

//array
let numeros = [1,2,3,4,5,6,7,8,9,];//lista númerica
console.log(numeros[8]);
let texto = ["cachorro","bola","sapato","predio"]//lista textual
let mista = ["gato", 2, true];
console.log(texto[1]);
console.log(mista[2]);

//tamanho do array

console.log(texto.length); //4

//adicionar elementos em um array ou alterar

//adicionar

//começo(unshift)
texto.unshift("pão");
console.log(texto);
//final (pop)
texto.push("jogo");
console.log(texto);
//remove (shift)
texto.shift();
console.log(texto);
//remover do final é pop
texto.pop();
console.log(texto);

//alteração de valores
texto[2] = "Chinelo"
console.log(texto);

//percorrer um array (for // foreach)

for(let i = 0; i<numeros.length; i++){
    console.log("numeros ["+i+"]="+numeros[i]);
}

//foreach
texto.forEach(t => {
    console.log(t)
});

let lista = [];
for (let i = 1; i <= 100; i++) {
    lista.push(i);
}
console.log(lista);

//retorna o indice
texto.indexOf("chinelo");

//splice (remover elemento de posição especifica)
texto.splice(2,1); //posição e quantidade
console.log(texto);

//operações avançadas de arrays

let valores = [10, 20, 30 ,40, 50];

//map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter
let parteValores = valores.filter(x => x > 20);
console.log(parteValores);

// filtro e map x<35 x*2
let DesValores = valores.filter(x => x<35).map(x=> x*2);
console.log(DesValores);

//reduce
//x = acumulador, y = valor atual
let soma = valores.reduce((x,valorAtual)=>(x+valorAtual), 0);

//sort

let z = [2,6,3,8,1,7,4,9,5];
z.sort();
console.log(z);