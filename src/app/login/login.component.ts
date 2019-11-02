import { Router } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';
import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeado : boolean = false;

  correo : string = '';
  pass : string = '';

  constructor(private loginService: LoginService , private router: Router, private location: Location) { }

  ngOnInit() {
    var usuariog = JSON.parse(localStorage.getItem("usuario"));
    if (usuariog != null) {
      this.router.navigate(['home']);
    } 
  }

  login(){
    return this.loginService.login(this.correo,this.pass).subscribe((resultado)=>{
      this.logeado = true;
      localStorage.setItem("usuario",JSON.stringify(resultado));
     
      this.router.navigate(['home'])
      .then(() => {
        location.reload();
      });
     
    },
     (error)=>{
      console.log("error: " +error);
    });
  }
}
