import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario : any;
  
  constructor(private router : Router) { }

  ngOnInit() {
    var usuariog = JSON.parse(localStorage.getItem("usuario"));
    if (usuariog != null) {
      this.usuario = usuariog;
      console.log("home usuario");
    } else{
      console.log("false home");
      this.router.navigate(['/login']);
    }
  }

}
