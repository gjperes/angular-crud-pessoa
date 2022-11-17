import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { EditarPessoaComponent } from "./editar-pessoa/editar-pessoa.component";
import { InserirPessoaComponent } from "./inserir-pessoa/inserir-pessoa.component";
import { ListarPessoaComponent } from "./listar-pessoa/listar-pessoa.component";

export const PessoaRoutes: Routes = [
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar',
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE', 'FUNC'] },
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE', 'FUNC'] },
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE', 'FUNC'] },
  }
]
