import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

// Descreve o grupo de testes para o componente InicioComponent
describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  // Antes de cada teste, configura o módulo de teste e cria o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent]
    });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
