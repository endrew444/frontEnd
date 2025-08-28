import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  // Declara todos os componentes que pertencem a este módulo
  declarations: [
    AppComponent,
    InicioComponent,
    CurriculosComponent,
    VagasComponent,
    HeaderComponent,
    FooterComponent,
    PainelVagasComponent,
    CurriculoFormComponent,
    CurriculoListComponent,
    CurriculosComponent,
    NavbarComponent
  ],
  // Importa módulos necessários para a aplicação funcionar
  imports: [
    BrowserModule,      // Necessário para aplicações web Angular
    AppRoutingModule,   // Módulo de rotas da aplicação
    NgbModule,          // Módulo do ng-bootstrap para componentes visuais
    HttpClientModule,   // Permite fazer requisições HTTP
    FormsModule         // Permite o uso de formulários com ngModel
  ],
  providers: [],        // Serviços globais (vazio neste caso)
  bootstrap: [AppComponent] // Componente raiz que será inicializado
})
export class AppModule { }
