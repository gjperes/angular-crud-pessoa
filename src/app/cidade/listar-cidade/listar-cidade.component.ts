import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css'],
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos() {
    return this.cidadeService.listarTodos();
  }

  remover($event: MouseEvent, cidade: Cidade) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }
}
