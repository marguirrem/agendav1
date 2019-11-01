import { EstalogueadoService } from './../servicios/estalogueado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logeado: boolean = false;

  usuarioId: number;
  usuario: string;

  constructor(private estalogueado: EstalogueadoService, public router: Router) {
    estalogueado.isUserLoggedIn.subscribe(value => {
      this.logeado = value;
    });
  }

  ngOnInit() {
      this.obtenerUsuario();
  }

  obtenerUsuario() {
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario != null) {
      this.usuarioId = usuario.usuarioId;
      this.usuario = usuario.usuario;
      this.logeado = true;
    } 
  }

  obtenerUserName() {
    setTimeout(() => {

    }, 1000);
    return this.usuario;
  }

  logout() {
    localStorage.removeItem("usuario");
    this.ngOnInit();
  }
}
