import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit {
  // Array que irá armazenar a lista de currículos
  curriculos: Curriculo[] = [];

  // Injeta o serviço de currículos
  constructor(private curriculoService: CurriculoService) {}

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    // Busca a lista de currículos no serviço e popula o array
    this.curriculoService.getCurriculos().subscribe((dados) => {
      this.curriculos = dados.map((item: any) => Curriculo.fromMap(item));
    });
  }
}