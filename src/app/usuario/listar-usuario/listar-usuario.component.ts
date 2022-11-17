import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/auth/services/usuario.service';
import { Usuario } from 'src/app/shared';
import { ModalUsuarioComponent } from '../modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios!: Usuario[];

  constructor(
    public activeModal: NgbModal,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    return this.usuarioService.listarTodos().subscribe({
      next: (data: Usuario[]) => {
        if (data === null) {
          this.usuarios = [];
        } else {
          this.usuarios = data;
        }
      },
    });
  }

  abrirModalUsuario(usuario: Usuario) {
    const modalRef = this.activeModal.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
  }

  remover($event: MouseEvent, usuario: Usuario) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o usuário: ${usuario.nome}?`)) {
      this.usuarioService.remover(usuario.id!).subscribe({
        complete: () => {
          this.listarTodos();
        },
      });
    }
  }
}
