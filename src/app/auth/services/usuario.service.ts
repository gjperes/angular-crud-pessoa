import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  BASE_URL = 'http://localhost:3000/usuarios/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTodos() {
    return this.httpClient.get<Usuario[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number) {
    return this.httpClient.get<Usuario>(this.BASE_URL + id, this.httpOptions);
  }

  inserir(usuario: Usuario) {
    const usuarioJSON = JSON.stringify(usuario);
    return this.httpClient.post<Usuario>(this.BASE_URL, usuarioJSON, this.httpOptions);
  }

  remover(id: number) {
    return this.httpClient.delete<Usuario>(this.BASE_URL + id, this.httpOptions);
  }

  atualizar(usuario: Usuario) {
    const usuarioJSON = JSON.stringify(usuario);
    return this.httpClient.put<Usuario>(this.BASE_URL + usuario.id, usuarioJSON, this.httpOptions);
  }
}
