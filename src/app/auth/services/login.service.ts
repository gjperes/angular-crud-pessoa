import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login, Usuario } from 'src/app/shared';

const LS_CHAVE = "usuarioLogado";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public get usuarioLogado(): Usuario {
    const usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  login(login: Login): Observable<Usuario | null> {
    const func = new Usuario(1, "Func", login.login, login.senha, "FUNC");
    const admin = new Usuario(1, "Admin", login.login, login.senha, "ADMIN");
    const gerente = new Usuario(1, "Gerente", login.login, login.senha, "GERENTE");

    let user = func;

    if (login.login === login.senha) {
      if (login.login === 'admin') {
        user = admin;
      } else if (login.login === 'gerente') {
        user = gerente;
      }

      return of(user);
    } else {
      return of(null);
    }
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }
}
