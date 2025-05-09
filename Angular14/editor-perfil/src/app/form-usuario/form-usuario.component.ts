import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {

  //atributos
  nome: string = "";
  email: string = "";
  telefone: string = "";
  genero: string = "";
  idade: number | null = null;
  profissao: string = "";

  //métodos
  limparDados(){
    this.nome = "";
    this.email = "";
    this.telefone="";
    this.genero="";
    this.idade = null;
    this.profissao = "";
  }

  //validar os dados do formulario
  validarDados() {
    if (!this.email.includes('@') || this.idade === null || this.idade <= 17) {
      alert("Erro no formulário");
    } else {
      alert("Dados válidos!");
    }
  }
//enviar os dados do formulario
  enviarFormulario() {
    if (this.nome && this.email && this.telefone && this.genero && this.idade && this.profissao) {
      alert("Formulário enviado com sucesso!");
    } else {
      alert("Preencha todos os campos obrigatórios.");
    }
  }
}
