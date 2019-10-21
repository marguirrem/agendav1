import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logeado : boolean = false;

  usuarioId : number;
  usuario : string;

  constructor(public router: Router) { }

  ngOnInit() {
      if(this.logeado == false){
        this.obtenerUsuario();
      }
  }

  obtenerUsuario(){
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    if(usuario != null){
      console.log("usuario " +usuario.usuario);
      this.usuarioId= usuario.usuarioId;
      this.usuario = usuario.usuario;
      this.logeado = true;
      this.ngOnInit();
    }else{
      console.log("debe iniciar sesion " +usuario);
    }
  }

  obtenerUserName(){
    setTimeout(()=>{

    },1000);
    return this.usuario;
  }


  logout(){
    localStorage.removeItem("usuario");
    this.ngOnInit();
  }
}
