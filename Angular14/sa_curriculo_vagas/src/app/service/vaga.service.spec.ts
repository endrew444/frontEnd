import { TestBed } from '@angular/core/testing';

// Importa o serviço que será testado
import { VagaService } from './vaga.service';

// Descreve o grupo de testes para VagaService
describe('VagaService', () => {
  let service: VagaService;

  // Antes de cada teste, configura o módulo de teste e injeta o serviço
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagaService);
  });

  // Teste simples para verificar se o serviço foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
