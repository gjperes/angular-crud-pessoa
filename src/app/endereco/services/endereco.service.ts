import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared';

const LOCAL_STORAGE_KEY = 'enderecos';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos(): Endereco[] {
    const enderecos = localStorage[LOCAL_STORAGE_KEY];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserir(endereco: Endereco) {
    const enderecos = this.listarTodos();

    endereco.id = new Date().getTime();
    enderecos.push(endereco);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(enderecos);
  }

  buscarPorId(id: number) {
    const enderecos = this.listarTodos();
    return enderecos.find((endereco) => endereco.id === id);
  }

  atualizar(endereco: Endereco) {
    const enderecos = this.listarTodos();
    enderecos.forEach((obj, idx, objs) => {
      if (endereco.id === obj.id) {
        objs[idx] = endereco;
      }
    });

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(enderecos);
  }

  remover(id: number) {
    let enderecos = this.listarTodos();
    enderecos = enderecos.filter((endereco) => endereco.id !== id);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(enderecos);
  }
}
