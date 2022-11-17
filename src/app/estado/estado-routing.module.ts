import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { EditarEstadoComponent } from "./editar-estado/editar-estado.component";
import { InserirEstadoComponent } from "./inserir-estado/inserir-estado.component";
import { ListarEstadoComponent } from "./listar-estado/listar-estado.component";

export const EstadoRoutes: Routes = [
  {
    path: 'estados',
    redirectTo: 'estados/listar',
  },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'FUNC'] },
  },
  {
    path: 'estados/novo',
    component: InserirEstadoComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'FUNC'] },
  },
  {
    path: 'estados/editar/:id',
    component: EditarEstadoComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'FUNC'] },
  }
]
