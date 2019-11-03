import { SedesService } from './../servicios/sedes.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar'; 

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
    private sedesService : SedesService,
    private snackBar : MatSnackBar,
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

  crearSede() {
    let nombre = (<HTMLInputElement>document.getElementById("sedeNombreC")).value;
    //let nombre = document.getElementById("rolNombreC").value;
    //let estado = document.getElementById("rolEstadoC").value;
    let estado = (<HTMLInputElement>document.getElementById("sedeEstadoC")).value

    if (nombre == "") {

    } else {
      let sede = {
        "nombre": nombre,
        "estado": estado
      }
      this.sedesService.crearSede(sede).subscribe(resultado => {
        document.getElementById("btnModalCrearSede").click();
        this.snackBar.open('Sede creada con exito!', 'X', {
          duration: 3000
        });
        this.ngOnInit();
      }, err => {
        console.log("Error: " + JSON.stringify(err));
      });
    }
  }
 
}
