import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoListComponent } from './curriculo-list.component';

// Descreve o grupo de testes para CurriculoListComponent
describe('CurriculoListComponent', () => {
  let component: CurriculoListComponent;
  let fixture: ComponentFixture<CurriculoListComponent>;

  // Antes de cada teste, configura o módulo de teste e cria o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoListComponent]
    });
    fixture = TestBed.createComponent(CurriculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
