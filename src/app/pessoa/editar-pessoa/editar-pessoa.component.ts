import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css'],
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // snapshot.params dá acesso aos parâmetros passados
    // operador + (antes de this) converte para número
    const id = +this.route.snapshot.params['id'];
    const res = this.pessoaService.buscarPorId(id);

    if (res !== undefined) {
      this.pessoa = res;
    } else {
      throw new Error(`Pessoa não encontrada: id = ${id}`);
    }
  }

  atualizar() {
    if (this.formPessoa.form.valid) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
