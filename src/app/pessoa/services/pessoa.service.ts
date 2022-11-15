import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

const LOCAL_STORAGE_KEY = 'pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LOCAL_STORAGE_KEY];
    // Ternário usado pois retorna undefined caso a LS KEY não exista
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa) {
    const pessoas = this.listarTodos();

    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined {
    const pessoas = this.listarTodos();
    return pessoas.find((pessoa) => pessoa.id === id);
  }

  atualizar(pessoa: Pessoa) {
    const pessoas = this.listarTodos();

    pessoas.forEach((objeto, index, objetos) => {
      if (pessoa.id === objeto.id) {
        objetos[index] = pessoa;
      }
    });

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(pessoas);
  }

  remover(id: number) {
    let pessoas = this.listarTodos();
    pessoas = pessoas.filter((pessoa) => pessoa.id !== id);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(pessoas);
  }
}
