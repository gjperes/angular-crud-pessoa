import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css'],
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private router: Router,
    private route: ActivatedRoute,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);

    if (res === undefined) throw new Error(`Cidade não encontrada: id = ${id}`);
    this.cidade = res;

    this.estados = this.estadoService.listarTodos();
  }

  atualizar() {
    if (this.formCidade.form.valid) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
