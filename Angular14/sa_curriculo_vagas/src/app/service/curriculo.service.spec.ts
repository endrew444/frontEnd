import { TestBed } from '@angular/core/testing';

// Importa o serviço que será testado
import { CurriculoService } from './curriculo.service';

// Descreve o grupo de testes para CurriculoService
describe('CurriculoService', () => {
  let service: CurriculoService;

  // Antes de cada teste, configura o módulo de teste e injeta o serviço
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculoService);
  });

  // Teste simples para verificar se o serviço foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});