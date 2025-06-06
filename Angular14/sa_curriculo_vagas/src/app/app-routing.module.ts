import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';

// Define as rotas da aplicação, associando caminhos a componentes
const routes: Routes = [
  {path: "", component: InicioComponent}, // Rota inicial (home)
  {path: "curriculos", component: CurriculoListComponent}, // Lista de currículos
  {path: "vagas", component: VagasComponent}, // Lista de vagas
  {path: "painel-vagas", component: PainelVagasComponent}, // Painel de administração de vagas
  {path: "curriculo-list", component: CurriculoListComponent}, // Lista de currículos (rota alternativa)
  {path: "curriculo-form", component: CurriculoFormComponent}, // Formulário de cadastro de currículo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa as rotas para o módulo raiz
  exports: [RouterModule] // Exporta o RouterModule para uso em outros módulos
})
export class AppRoutingModule { }
