//galeria de imagens usando o DOM

let uploadInput = document.getElementById("upload");
let addButton = document.getElementById("addImage");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

//ipload das imagens
let imagens = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd",
    "https://images.unsplash.com/photo-1494172961521-33799ddd43a5",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
]; //array pra guardar o endereço das imagens

addButton.addEventListener(
    "click", ()=>{
        //pegar a url da imagem
        let imagemURL =uploadInput.value.trim();
        if(imagemURL ==="")return;
        imagens.push(imagemURL);
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    }
);

//atualizarCarrossel
function atualizarCarrossel(){
    carrossel.innerHTML=""; //limpar o carrossel
    imagens.forEach(imagem => {
        let img = document.createElement("img")
        img.src = imagem;
        img.style.width = "100%";
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%` //ajustando o tamanho do carrossel
    iniciarCarrossel();
}

//iniciar carrossel
function iniciarCarrossel(){
    let index = 0;
    setInterval(() => {
        index = (index +1) % imagens.length;
        carrossel.style.transition = `transform 1s ease-in-out`;
        carrossel.style.transform = `translateX(-${index*(100/imagens.length)}%)`;
    }, 2000);
}
//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML="";
    imagens.forEach((imagem, index) => {
        const card = document.createElement("div");//criar uma div
        card.classList.add("imagemCad");//adicionar uma class
        const img = document.createElement("img");
        img.src = imagem;
        card.appendChild(img);
        galeria.appendChild(card);
    })
}

atualizarGaleria();
atualizarCarrossel();