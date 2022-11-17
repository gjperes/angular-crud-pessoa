import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { InserirEditarUsuarioComponent } from './inserir-editar-usuario/inserir-editar-usuario.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListarUsuarioComponent,
    InserirEditarUsuarioComponent,
    ModalUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule
  ]
})
export class UsuarioModule { }
