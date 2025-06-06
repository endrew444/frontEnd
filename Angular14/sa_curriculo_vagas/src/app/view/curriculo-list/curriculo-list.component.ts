import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss']
})
export class CurriculoListComponent implements OnInit {
  // Array que irá armazenar a lista de currículos
  public curriculos: Curriculo[] = [];

  // Injeta o serviço de currículos
  constructor(private curriculoService: CurriculoService) {}

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    this.listarCurriculos();
  }

  // Busca a lista de currículos no serviço e popula o array
  listarCurriculos() {
    this.curriculoService.getCurriculos().subscribe(
      (retornaCurriculo) => {
        // Converte cada item retornado em uma instância de Curriculo
        this.curriculos = retornaCurriculo.map(
          (item: any) => Curriculo.fromMap(item)
        );
      }
    );
  }
}
