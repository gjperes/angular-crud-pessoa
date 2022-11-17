import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { CidadeRoutes } from './cidade';
import { EnderecoRoutes } from './endereco';
import { EstadoRoutes } from './estado';
import { HomeComponent } from './home/home.component';
import { PessoaRoutes } from './pessoa';
import { UsuarioRoutes } from './usuario';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN', 'GERENTE', 'FUNC'] },
  },
  ...PessoaRoutes,
  ...EstadoRoutes,
  ...CidadeRoutes,
  ...EnderecoRoutes,
  ...UsuarioRoutes,
  ...LoginRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
