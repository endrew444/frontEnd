import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  //atributo - localhost
  private apiUrl: string = " http://localhost:3010/vagas";

  constructor(private http: HttpClient) { }

  //comunicação CRUD da API (get/post/put/delete)

  //obter a liosta de vagas (GET)
  getVagas(): Observable<Vaga []> {
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //cadastrar(post)
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]>{
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  //atualizar(put)
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]>{
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizar, vaga);
  }

  //deletar(delete)
  removerVaga(id: any): Observable<Vaga[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar)
  }
}