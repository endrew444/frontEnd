import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService { //controller - Model => View
  //atributos
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }
//funções para pegar as informações do vetor
  getClientes(): Cliente[]{
    return this.clientes;
  }

  getProdutos(): Produto[]{
    return this.produtos;
  }

  getPedidos(): Pedido[]{
    return this.pedidos;
  }

  //metodos para adc info no vetor
  adicionarCliente(cliente: Cliente) : void {
    this.clientes.push(cliente);
  }

  adicionarProduto(produto: Produto) : void {
    this.produtos.push(produto);
  }

  adicionarPedido(pedido: Pedido) : void {
    this.pedidos.push(pedido);
  }
}