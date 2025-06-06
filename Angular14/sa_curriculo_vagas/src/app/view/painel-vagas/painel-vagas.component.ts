import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit{
  // Atributo que representa a vaga atualmente sendo manipulada no formulário
  public vaga: Vaga = new Vaga(0,"","","",0); // rastreia os dados do Formulário

  // Vetor para armazenar as vagas vindas do banco de dados
  public vagas:Vaga[] = [];

  // Injeta o serviço de vagas ao construir o componente
  constructor(private _vagasService: VagaService){} 

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    this.listarVagas();
  }

  // Busca todas as vagas no serviço e popula o array de vagas
  listarVagas(){
    this._vagasService.getVagas().subscribe(
      (retornoVaga) => {
        this.vagas = retornoVaga.map(
          (item)=> Vaga.fromMap(item)
        );
      }
    );
  }

  // Preenche o formulário com os dados de uma vaga selecionada
  listarVagaUnica(vaga: Vaga){
    this.vaga = vaga
  }

  // Cadastra uma nova vaga usando o serviço e limpa o formulário após sucesso
  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
      },
      (err) => {console.error("Erro ao Cadastrar",err);}
    );
  }

  // Atualiza uma vaga existente pelo id e limpa o formulário após sucesso
  atualizar(id:number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
      },
      (err) => console.error("Erro ao Atualizar", err)
    );
  }

  // Remove uma vaga pelo id e atualiza a lista após sucesso
  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      () => { this.listarVagas();},
      (err) => {console.log("Erro ao Deletar",err)}
    );
  }
}
