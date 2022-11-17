import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';

export const EnderecoRoutes: Routes = [
  {
    path: 'enderecos',
    redirectTo: 'enderecos/listar',
  },
  {
    path: 'enderecos/listar',
    component: ListarEnderecoComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE'] },
  },
  {
    path: 'enderecos/novo',
    component: InserirEnderecoComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE'] },
  },
  {
    path: 'enderecos/editar/:id',
    component: EditarEnderecoComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE'] },
  },
];
