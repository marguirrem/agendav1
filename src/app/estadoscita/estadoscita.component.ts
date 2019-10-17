import { EstadoscitaService } from './../servicios/estadoscita.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estadoscita',
  templateUrl: './estadoscita.component.html',
  styleUrls: ['./estadoscita.component.css']
})
export class EstadoscitaComponent implements OnInit {

  estadosCita : any = [];
  constructor(private estadosCitaService :EstadoscitaService) { }

  ngOnInit() {
    this.obtenerEstadosCita();
  }
  
  obtenerEstadosCita(){
    this.estadosCitaService.obtenerEstadosCita().subscribe(resultado => {
      this.estadosCita = resultado;
    },err =>{
      console.log("Error: " + err);
    });
  }

}
