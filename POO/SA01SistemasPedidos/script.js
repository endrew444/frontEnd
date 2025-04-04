//criar as classes
class Cliente{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Produto{
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido{
    constructor(id, cliente, itens, Desconto) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens; 
        this.Desconto = Desconto;
    }
    calcularTotal() {
        let total = this.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);
        return total - (total * this.Desconto / 100);
    }
}

class SistemaPedidos{
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }
    cadastrarCliente(cliente) {
        const nome = document.getElementById("nomeCliente").value;
        if (!nome) return alert("Nome do cliente é obrigatório!!");
        const cliente = new Cliente(this.clientes.length + 1, nome);
        this.clientes.push(cliente);
    }

    cadastrarProduto(produto) {
        const nome = document.getElementById("nomeProduto").value;
        const preco = parseFloat(document.getElementById("precoProduto").value);
        if (!nome || preco) return alert("Nome e preço do produto são obrigatórios!!");
        const produto = new Produto(this.produtos.length + 1, nome, preco);
        this.produtos.push(produto);
    }

    atualizarClientes(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = ""; // Limpa a lista antes de atualizar

        const selectCliente = document.getElementById("selectCliente");
        selectCliente.innerHTML = '<opition value = "">Selecione um Cliente'; // Limpa o select antes de atualizar
        this.clientes.forEach(cliente => {
            const li = document.createElement("li");
            li.innerText - cliente.nome;
        });
    }
}