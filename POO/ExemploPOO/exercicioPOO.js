class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;// atributo público
        this.preco = preco;// atributo público
        this.estoque = estoque;// atributo público
    }
    vender(qtd) {
        if (this.estoque >= qtd) {
            this.estoque -= qtd;
            console.log(`Venda realizada!! Estoque atual: ${this.estoque}`);
        } else {
            console.log("Estoque insuficiente!!");
        }
    }
    repor(qtd) {
        this.estoque += qtd;
        console.log(`Estoque reposto! Estoque atual: ${this.estoque}`);
    }
    exibirInfo() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}, Estoque: ${this.estoque}`);
    }
}

let produto1 = new Produto("Camiseta", 29.90, 100);
let produto2 = new Produto("Calça", 79.90, 50);
let produto3 = new Produto("Tênis", 199.90, 20);

produto1.exibirInfo();
produto2.exibirInfo();
produto3.exibirInfo();

console.log("--------------------------");
console.log("Vender 10 camisetas:" + produto1.nome);
produto1.vender(10);
produto1.exibirInfo();
console.log("Repor 20 camisetas:" + produto1.nome);
produto1.repor(20);
produto1.exibirInfo();
console.log("--------------------------");
console.log("Vender 15 calças:" + produto2.nome);
produto2.vender(15);
produto2.exibirInfo();
console.log("Repor 30 calças:" + produto2.nome);
produto2.repor(30);
produto2.exibirInfo();
console.log("--------------------------");
console.log("Vender 5 tênis:" + produto3.nome);
produto3.vender(5);
produto3.exibirInfo();
console.log("Repor 10 tênis:" + produto3.nome);
produto3.repor(10);
produto3.exibirInfo();
console.log("--------------------------");