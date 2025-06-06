import { Component } from '@angular/core';

// Declaração do componente principal da aplicação
@Component({
  selector: 'app-root', // Seletor usado no HTML para este componente
  templateUrl: './app.component.html', // Caminho do arquivo de template HTML
  styleUrls: ['./app.component.scss'] // Caminho do arquivo de estilos SCSS
})
export class AppComponent {
  // Título da aplicação, utilizado no template
  title = 'sa_curriculo_vagas';
}
