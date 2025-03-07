//parte 1
let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector(".paragrafo");

console.log(titulo);
console.log(paragrafo);

//parte 2
function mudartexto() {
    titulo.innerText = "Novo Título";
    paragrafo.innerText = "Novo Parágrafo";
}

//parte 3
function mudarfundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

//parte 4
function adicionarclasse(){
    titulo.classList.add("descricao");
    document.querySelector(".descricao").style.color = "red"
}