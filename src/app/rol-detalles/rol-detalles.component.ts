import { ActivatedRoute } from '@angular/router';
import { RolesService } from './../servicios/roles.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rol-detalles',
  templateUrl: './rol-detalles.component.html',
  styleUrls: ['./rol-detalles.component.css']
})
export class RolDetallesComponent implements OnInit {

  rol: any;

  constructor(
    private route: ActivatedRoute,
    private rolesService: RolesService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.obtenerRol(params.get('rolId'));
    });
  }

  obtenerRol(id: string) {
    return this.rolesService.obtenerRol(id).subscribe(resultado => {
      this.rol = resultado;
    });
  }

  toggleModalEditar() {
    let button = document.getElementById("toggleModalEditar");
    button.click();

    document.getElementById("rolNombre").value = this.rol.nombre;
    document.getElementById("rolEstado").value = this.rol.estado;
  }

 

  actualizarRol(): void {
    let nombre = document.getElementById("rolNombre");
    if (nombre.value == "") {
      nombre.classList.add("border-danger");
      nombre.placeholder = "Debe llenar este campo";
      setTimeout(() => {
        nombre.classList.remove("border-danger");
        nombre.placeholder = "";
      }, 2000);

    } else {
      let estado = document.getElementById("rolEstado");
      this.rol.nombre = nombre.value;
      this.rol.estado = estado.value;

      this.rolesService.actualizarRol(this.rol).subscribe((resultado) => {
        this.toggleModalEditar();
        this.snackBar.open('Rol acutalizado con exito!', 'X', {
          duration: 3000
        });
      }, (error) => {
        console.log("Error: " + JSON.stringify(error));
      });
    }
  }


}
