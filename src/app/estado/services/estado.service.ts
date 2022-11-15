import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado';

const LOCAL_STORAGE_KEY = 'estados';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  constructor() {}

  listarTodos(): Estado[] {
    const estados = localStorage[LOCAL_STORAGE_KEY];
    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado: Estado) {
    const estados = this.listarTodos();

    estado.id = new Date().getTime();
    estados.push(estado);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(estados);
  }

  buscarPorId(id: number) {
    const estados = this.listarTodos();
    return estados.find((estado) => estado.id === id);
  }

  atualizar(estado: Estado) {
    const estados = this.listarTodos();
    estados.forEach((obj, idx, objs) => {
      if (estado.id === obj.id) {
        objs[idx] = estado;
      }
    });

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(estados);
  }

  remover(id: number) {
    let estados = this.listarTodos();
    estados = estados.filter((estado) => estado.id !== id);

    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(estados);
  }
}
