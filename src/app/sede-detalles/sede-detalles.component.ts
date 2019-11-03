import { SedesService } from './../servicios/sedes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-sede-detalles',
  templateUrl: './sede-detalles.component.html',
  styleUrls: ['./sede-detalles.component.css']
})
export class SedeDetallesComponent implements OnInit {

  sede : any;
  sedeId : any;
  constructor(
    private route: ActivatedRoute,
    private sedesService : SedesService,
    private snackBar : MatSnackBar
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sedeId  = params.get('sedeId');
      this.obtenerSede(this.sedeId);
    });
  }

  obtenerSede(id : string){
    this.sedesService.obtenerUnaSede(id).subscribe(resultado =>{
      this.sede = resultado;
    });
  }

  toggleModalEditar() {
    let button = document.getElementById("toggleModalEditarSede");
    button.click();
    (<HTMLInputElement>document.getElementById("sedeNombreE")).value = this.sede.nombre; 
    //document.getElementById("rolNombre").value = ;
    (<HTMLInputElement>document.getElementById("sedeEstadoE")).value = this.sede.estado;
   // document.getElementById("rolEstado").value = this.rol.estado;
  }
  editarSede(): void {
    //let nombre = document.getElementById("rolNombre");
    let nombre  = (<HTMLInputElement>document.getElementById("sedeNombreE")); 
    
    if (nombre.value == "") {
      nombre.classList.add("border-danger");
      nombre.placeholder = "Debe llenar este campo";
      setTimeout(() => {
        nombre.classList.remove("border-danger");
        nombre.placeholder = "";
      }, 2000);

    } else {
      //let estado = document.getElementById("rolEstado");
      let estado  = (<HTMLInputElement>document.getElementById("rolEstado"));
      this.sede.nombre = nombre.value;
      this.sede.estado = estado.value;

      this.sedesService.editarSede(this.sede).subscribe((resultado) => {
        this.toggleModalEditar();
        this.snackBar.open('Sede acutalizada con exito!', 'X', {
          duration: 3000
        });
      }, (error) => {
        console.log("Error: " + JSON.stringify(error));
      });
    }
  }
}
