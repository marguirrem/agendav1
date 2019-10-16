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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SedesComponent,
    SedeDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SedesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
