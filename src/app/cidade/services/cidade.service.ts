import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade';

const LOCAL_STORAGE_KEY = 'cidades';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor() {}

  listarTodos(): Cidade[] {
    const cidades = localStorage[LOCAL_STORAGE_KEY];
    return cidades ? JSON.parse(cidades) : [];
  }

  inserir(cidade: Cidade) {
    const cidades = this.listarTodos();

    cidade.id = new Date().getTime();
    cidades.push(cidade);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(cidades);
  }

  buscarPorId(id: number) {
    const cidades = this.listarTodos();
    return cidades.find((cidade) => cidade.id === id);
  }

  atualizar(cidade: Cidade) {
    const cidades = this.listarTodos();
    cidades.forEach((obj, idx, objs) => {
      if (cidade.id === obj.id) {
        objs[idx] = cidade;
      }
    });

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(cidades);
  }

  remover(id: number) {
    let cidades = this.listarTodos();
    cidades = cidades.filter(cidade => cidade.id !== id);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(cidades);
  }
}
