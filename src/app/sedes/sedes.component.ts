import { SedesService } from './../servicios/sedes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  sedes = [ ]/*
    {"nombre": "Guatemala", "estado":1, "sedeId":1},
    {"nombre": "Xela", "estado":1, "sedeId":2},
    {"nombre": "Zacapa", "estado":0, "sedeId":3}
  ]*/
  constructor(
    private sedesService : SedesService
  ) { }

  ngOnInit() {
    this.obtenerSedes();
  }

  obtenerSedes(){
    return this.sedesService.obtenerSedes().subscribe(resultado => {
      this.sedes = resultado;
    },err => {
      console.log("Error: " +err);
    });
  }

 
}
