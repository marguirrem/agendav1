import { LoginService } from './servicios/login.service';
import { EstadoscitaService } from './servicios/estadoscita.service';
import { RolesService } from './servicios/roles.service';
import { SedesService } from './servicios/sedes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SedesComponent } from './sedes/sedes.component';
import { SedeDetallesComponent } from './sede-detalles/sede-detalles.component';
import { RolesComponent } from './roles/roles.component';
import { RolDetallesComponent } from './rol-detalles/rol-detalles.component';
import { EstadoscitaComponent } from './estadoscita/estadoscita.component';
import { EstadocitaDetallesComponent } from './estadocita-detalles/estadocita-detalles.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SedesComponent,
    SedeDetallesComponent,
    RolesComponent,
    RolDetallesComponent,
    EstadoscitaComponent,
    EstadocitaDetallesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SedesService,
    RolesService,
    EstadoscitaService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
