import { EstadoscitaService } from './../servicios/estadoscita.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBarModule, MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-estadoscita',
  templateUrl: './estadoscita.component.html',
  styleUrls: ['./estadoscita.component.css']
})
export class EstadoscitaComponent implements OnInit {

  estadosCita : any = [];
  constructor(
    private estadosCitaService :EstadoscitaService,
    private snackBar : MatSnackBar) { }

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

  crearEstado() {
    let nombre = (<HTMLInputElement>document.getElementById("estadoNombreC")).value;
    //let nombre = document.getElementById("rolNombreC").value;
    //let estado = document.getElementById("rolEstadoC").value;
    let estado = (<HTMLInputElement>document.getElementById("estadoEstadoC")).value;
    let color = (<HTMLInputElement>document.getElementById("estadoColorC")).value;

    if (nombre == "" || color == "") {

    } else {
      let estadoCita = {
        "nombre": nombre,
        "estado": estado,
        "color": color
      }
      this.estadosCitaService.crearEstado(estadoCita).subscribe(resultado => {
        document.getElementById("btnModalCrearEstado").click();
        this.snackBar.open('Estado creado con exito!', 'X', {
          duration: 3000
        });
        this.ngOnInit();
      }, err => {
        console.log("Error: " + JSON.stringify(err));
      });
    }
  }
}
