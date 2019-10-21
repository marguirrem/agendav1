import { Router } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';
import { LoginService } from './../servicios/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeado : boolean = false;

  correo : string = '';
  pass : string = '';

  constructor(private loginService: LoginService , private router: Router) { }

  ngOnInit() {

  }

  login(){
    console.log("component : correo " +this.correo +" pass "+this.pass);
    return this.loginService.login(this.correo,this.pass).subscribe((resultado)=>{
      this.logeado = true;
      localStorage.setItem("usuario",JSON.stringify(resultado));
      
      this.router.navigateByUrl('/');
    },
     (error)=>{
      console.log("error: " +error);
    });
  }
}
