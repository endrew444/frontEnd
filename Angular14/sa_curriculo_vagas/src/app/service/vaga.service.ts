import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  // URL da API de vagas
  private apiUrl: string = " http://localhost:3010/vagas";

  // Injeta o HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) { }

  // Obtém a lista de vagas (GET)
  getVagas(): Observable<Vaga []> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // Cadastra uma nova vaga (POST)
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]>{
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  // Atualiza uma vaga existente (PUT)
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]>{
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizar, vaga);
  }

  // Remove uma vaga (DELETE)
  removerVaga(id: any): Observable<Vaga[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar)
  }
}