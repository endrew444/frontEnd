import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVagasComponent } from './painel-vagas.component';

// Descreve o grupo de testes para o componente PainelVagasComponent
describe('PainelVagasComponent', () => {
  let component: PainelVagasComponent;
  let fixture: ComponentFixture<PainelVagasComponent>;

  // Antes de cada teste, configura o módulo de teste e cria o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelVagasComponent]
    });
    fixture = TestBed.createComponent(PainelVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
