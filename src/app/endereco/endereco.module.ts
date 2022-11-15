import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnderecoService } from './services/endereco.service';
import { SharedModule } from '../shared';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    EditarEnderecoComponent,
    InserirEnderecoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  providers: [EnderecoService],
})
export class EnderecoModule {}
