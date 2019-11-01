import { HomeComponent } from './home/home.component';
import { EstadocitaDetallesComponent } from './estadocita-detalles/estadocita-detalles.component';
import { RolesComponent } from './roles/roles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { SedeDetallesComponent } from './sede-detalles/sede-detalles.component';
import { RolDetallesComponent } from './rol-detalles/rol-detalles.component';
import { EstadoscitaComponent } from './estadoscita/estadoscita.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sedes', component: SedesComponent },
  { path: 'sedes/:sedeId', component: SedeDetallesComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'roles/:rolId', component: RolDetallesComponent },
  { path: 'estadoscita', component: EstadoscitaComponent },
  { path: 'estadoscita/:estadoCitaId', component: EstadocitaDetallesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
