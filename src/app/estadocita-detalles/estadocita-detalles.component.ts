import { ActivatedRoute } from '@angular/router';
import { EstadoscitaService } from './../servicios/estadoscita.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-estadocita-detalles',
  templateUrl: './estadocita-detalles.component.html',
  styleUrls: ['./estadocita-detalles.component.css']
})
export class EstadocitaDetallesComponent implements OnInit {

  estadoCita : any;

  constructor(
    private route : ActivatedRoute,
    private estadosCitaService :EstadoscitaService,
    private snackBar : MatSnackBar
    ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.obtenerEstadoCita(params.get('estadoCitaId'));
    });
    
  }

  obtenerEstadoCita(id : string){
    return this.estadosCitaService.obtenerEstadoCita(id).subscribe(resultado => {
      this.estadoCita = resultado;
    },err =>{
      console.log("Error: " + err);
    });
  }

  toggleModalEditar() {
    let button = document.getElementById("toggleModalEditarEstado");
    button.click();
    (<HTMLInputElement>document.getElementById("estadoNombreE")).value = this.estadoCita.nombre; 
    //document.getElementById("rolNombre").value = ;
    (<HTMLInputElement>document.getElementById("estadoEstadoE")).value = this.estadoCita.estado;
   // document.getElementById("rolEstado").value = this.rol.estado;
    (<HTMLInputElement>document.getElementById("estadoColorE")).value = this.estadoCita.color;
  }

  editarEstado(): void {
    //let nombre = document.getElementById("rolNombre");
    let nombre  = (<HTMLInputElement>document.getElementById("estadoNombreE"));
    let color  = (<HTMLInputElement>document.getElementById("estadoColorE")); 
    
    if (nombre.value == "" || color.value == "") {
      nombre.classList.add("border-danger");
      //nombre.placeholder = "Debe llenar este campo";
      setTimeout(() => {
        nombre.classList.remove("border-danger");
        nombre.placeholder = "";
      }, 2000);

    } else {
      //let estado = document.getElementById("rolEstado");
      let estado  = (<HTMLInputElement>document.getElementById("estadoEstadoE"));
      this.estadoCita.nombre = nombre.value;
      this.estadoCita.estado = estado.value;
      this.estadoCita.color = color.value;

      this.estadosCitaService.editarEstado(this.estadoCita).subscribe((resultado) => {
        this.toggleModalEditar();
        this.snackBar.open('Estado actualizado con exito!', 'X', {
          duration: 3000
        });
      }, (error) => {
        console.log("Error: " + JSON.stringify(error));
      });
    }
  }
}
