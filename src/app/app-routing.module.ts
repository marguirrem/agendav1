import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedesComponent } from './sedes/sedes.component';
import { SedeDetallesComponent } from './sede-detalles/sede-detalles.component';

const routes: Routes = [
  { path: 'sedes', component: SedesComponent },
  { path: 'sedes/:sedeId', component: SedeDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
