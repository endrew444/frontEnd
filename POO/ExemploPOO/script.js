//criando a classe carro
class Carro {
    //atributos diretos
    //construtor define os atributos da classe
    constructor(marca, modelo, ano, cor, preco){
        this.marca/*atributo*/ = marca;//parametro da função/método;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    //método
    exibirInfo(){
        console.log(`Carro: ${this.marca}, ${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
    }
}

//criar objetos da classe carro
let carro1 = new Carro("FIAT","Uno",1994,"Cinza",8000.00);
let carro2 = new Carro("GM", "Corsa", 2011, "preto", 20000.00);
let carro3 = new Carro("Ford", "Ka", 2015, "branco", 30000.00);

carro1.exibirInfo();
carro2.exibirInfo();
carro3.exibirInfo();    

//atributos privados(#) e publicos

class Usuario{
    #nome;
    #senha; //atributo privado
    constructor(nome, senha){
        this.nome = nome;
        this.#senha = senha; //atributo privado
    }
    //metodo privado
    #trocarSenha(novaSenha){
        this.#senha = novaSenha;
    }
}
