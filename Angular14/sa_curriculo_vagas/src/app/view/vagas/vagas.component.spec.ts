import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasComponent } from './vagas.component';

// Descreve o grupo de testes para o componente VagasComponent
describe('VagasComponent', () => {
  let component: VagasComponent;
  let fixture: ComponentFixture<VagasComponent>;

  // Antes de cada teste, configura o módulo de teste e cria o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagasComponent]
    });
    fixture = TestBed.createComponent(VagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
