import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoService } from './services/estado.service';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ModalEstadoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [EstadoService],
})
export class EstadoModule {}
