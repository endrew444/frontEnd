import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoFormComponent } from './curriculo-form.component';

// Descreve o grupo de testes para CurriculoFormComponent
describe('CurriculoFormComponent', () => {
  let component: CurriculoFormComponent;
  let fixture: ComponentFixture<CurriculoFormComponent>;

  // Antes de cada teste, configura o módulo de teste e cria o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoFormComponent]
    });
    fixture = TestBed.createComponent(CurriculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
