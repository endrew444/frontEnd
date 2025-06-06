import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  // URL da API de currículos
  private apiUrl: string = "http://localhost:3010/curriculos";

  // Injeta o HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) { }

  // Obtém a lista de currículos (GET)
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // Cadastra um novo currículo (POST)
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  // Atualiza um currículo existente (PUT)
  atualizarCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizar, curriculo);
  }

  // Remove um currículo (DELETE)
  removerCurriculo(id: any): Observable<Curriculo[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }
}