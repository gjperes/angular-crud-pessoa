import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';

export const CidadeRoutes: Routes = [
  {
    path: 'cidades',
    redirectTo: 'cidades/listar',
  },
  {
    path: 'cidades/listar',
    component: ListarCidadeComponent,
    canActivate: [AuthGuard],
    data: { role: 'GERENTE' },
  },
  {
    path: 'cidades/novo',
    component: InserirCidadeComponent,
    canActivate: [AuthGuard],
    data: { role: 'GERENTE' },
  },
  {
    path: 'cidades/editar/:id',
    component: EditarCidadeComponent,
    canActivate: [AuthGuard],
    data: { role: 'GERENTE' },
  },
];
