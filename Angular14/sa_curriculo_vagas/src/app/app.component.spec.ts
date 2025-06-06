import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Descreve o grupo de testes para o componente principal AppComponent
describe('AppComponent', () => {
  // Antes de cada teste, configura o módulo de teste com os imports e declarações necessários
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  // Teste para verificar se o componente AppComponent é criado corretamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Teste para verificar se o título do componente é 'sa_curriculo_vagas'
  it(`should have as title 'sa_curriculo_vagas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sa_curriculo_vagas');
  });

  // Teste para verificar se o título é renderizado no template HTML
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('sa_curriculo_vagas app is running!');
  });
});
