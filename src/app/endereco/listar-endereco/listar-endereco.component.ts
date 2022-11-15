import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos() {
    return this.enderecoService.listarTodos();
  }

  remover($event: MouseEvent, endereco: Endereco) {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover o endereço ${endereco.id}?`)) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
