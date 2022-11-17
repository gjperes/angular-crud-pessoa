import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-inserir-editar-usuario',
  templateUrl: './inserir-editar-usuario.component.html',
  styleUrls: ['./inserir-editar-usuario.component.css'],
})
export class InserirEditarUsuarioComponent implements OnInit {
  @ViewChild('formUsuario') formUsuario!: NgForm;
  novoUsuario = true;
  usuario!: Usuario;
  loading!: boolean;
  id!: number;

  constructor(
    private usuarioService: UsuarioService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.loading = false;

    this.id = +this.route.snapshot.params['id'];
    this.novoUsuario = !this.id;

    if (!this.novoUsuario) {
      this.usuarioService.buscarPorId(this.id).subscribe({
        next: (usuario: Usuario) => {
          this.usuario = usuario;
          this.usuario.senha = "";
        }
      });
    }
  }

  salvar() {
    this.loading = true;

    if (this.formUsuario.form.valid) {
      if (this.novoUsuario) {
        this.usuarioService.inserir(this.usuario).subscribe({
          complete: () => {
            this.loading = false;
            this.router.navigate(['/usuarios']);
          },
        });
      } else {
        this.usuarioService.atualizar(this.usuario).subscribe({
          complete: () => {
            this.loading = false;
            this.router.navigate(['/usuarios']);
          },
        });
      }
    }

    this.loading = false;
  }
}
