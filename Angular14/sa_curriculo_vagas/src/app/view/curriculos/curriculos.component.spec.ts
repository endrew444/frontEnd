import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculosComponent } from './curriculos.component';

// Descreve o grupo de testes para CurriculosComponent
describe('CurriculosComponent', () => {
  let component: CurriculosComponent;
  let fixture: ComponentFixture<CurriculosComponent>;

  // Antes de cada teste, configura o módulo de teste e cria o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculosComponent]
    });
    fixture = TestBed.createComponent(CurriculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
