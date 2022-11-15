import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnderecoService } from './services/endereco.service';

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    EditarEnderecoComponent,
    InserirEnderecoComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [EnderecoService]
})
export class EnderecoModule {}
