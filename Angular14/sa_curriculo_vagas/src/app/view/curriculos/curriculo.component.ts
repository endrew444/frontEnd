import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {
  curriculos: Curriculo[] = []; // Array para armazenar os currículos

  ngOnInit(): void {
    // Exemplo de preenchimento (remova ou troque pelo seu serviço)
    this.curriculos = [
      new Curriculo(1, 'Endrew Machado', 'foto1.jpg', 'Desenvolvedor Frontend', 10000),
      new Curriculo(2, 'Maria Souza', 'foto2.jpg', 'Designer Gráfico', 2500)
    ];
  }
}
