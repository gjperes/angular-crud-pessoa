import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CidadeService } from './services/cidade.service';

@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [CidadeService],
})
export class CidadeModule {}
