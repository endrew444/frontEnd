import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})

export class ProdutoFormComponent {
  nome = "";
  preco = 0;
  cliente: Cliente | null = null;

  constructor(private dadoService: DadosService) { }

  adicionarProduto() {
    const produto = new Produto(this.dadoService.getProdutos().length+1, this.nome, this.preco);
    this.dadoService.adicionarProduto(produto);
    this.nome = "";
    this.preco = 0;
  }

}
