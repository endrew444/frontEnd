import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent {
  // Instância do modelo Curriculo para ser preenchida pelo formulário
  curriculo: Curriculo = new Curriculo(0, '', '', 0, '', '');
  // Mensagem de feedback para o usuário
  mensagem: string = '';

  // Injeta o serviço de currículos para comunicação com a API
  constructor(private curriculoService: CurriculoService) {}

  // Método chamado ao submeter o formulário para salvar o currículo
  salvarCurriculo() {
    this.curriculoService.cadastrarCurriculo(this.curriculo).subscribe(() => {
      // Exibe mensagem de sucesso e reseta o formulário
      this.mensagem = 'Currículo salvo com sucesso!';
      this.curriculo = new Curriculo(0, '', '', 0, '', '');
      setTimeout(() => this.mensagem = '', 3000);
    }, () => {
      // Exibe mensagem de erro caso a operação falhe
      this.mensagem = 'Erro ao salvar currículo!';
      setTimeout(() => this.mensagem = '', 3000);
    });
  }
}

