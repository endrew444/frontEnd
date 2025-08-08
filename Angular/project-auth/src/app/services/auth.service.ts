import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3011/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

   constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario:any):Observable<any>{
    //1º busca no banco de dados se o email já existe
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios=>{
        if(usuarios.length>0){ //caso exista
          //cria uma mensagem de erro pra seer tratada no try/catch
          return throwError (()=> Error("Usuário já Cadastrado"));//throwError cria uma mensdagem de erro
        }else{//caso ñ exista
          //cadastra o usuario no BD
          return this.http.post(this.apiUrl, usuario);
        }
      })
    )
  }

  login(credenciais: any): Observable<boolean>{
    //pega as credenciais do usuario (email e senha)
    return this.http.get<any[]>(
      //verifica no BD se email e senha foram achados
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuarios => {
        if(usuarios.length>0){//se foi encontrado
          //armazena as informações do usuario e a chave localStorage
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
          //retorna que foi permitido
          return true;
        }else{//caso ñ achado
          //retorna que meu usuario ñ está permitido o acesso
          return false;
          //fazer um erro
        }
      })
    )

  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH); //remove a chave de autenticaçãpo 
    this.router.navigate(['/home']);//redireciona para a pág home
  }

  //verificar se o usuario ja esta logado(CHAVE_AUTH)
  estaAutenticado():boolean{
    //vou transformar uma variavel do tipo texto em uma Boolean
    return !!localStorage.getItem(this.CHAVE_AUTH) //Vai retornar true ou false

  }

  //pegar as infos do usuario no LocalStorage
  getUsuarioAtual(): any{
    //retorna as info do usuario autenticado, que estão armazenadas no localStoirage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}" );
  }
}

