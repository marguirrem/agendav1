import { RolesService } from './../servicios/roles.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: any = [];
  constructor(
    private rolesService: RolesService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.obtenerRoles();
  }

  obtenerRoles() {
    this.rolesService.obtenerRoles().subscribe(resultado => {
      this.roles = resultado;
    }, err => {
      console.log("Error: " + JSON.stringify(err));
    });
  }

  crearRol() {
    let nombre = (<HTMLInputElement>document.getElementById("rolNombreC")).value;
    //let nombre = document.getElementById("rolNombreC").value;
    //let estado = document.getElementById("rolEstadoC").value;
    let estado = (<HTMLInputElement>document.getElementById("rolEstadoC")).value

    if (nombre == "") {

    } else {
      let rol = {
        "nombre": nombre,
        "estado": estado
      }
      this.rolesService.crearRol(rol).subscribe(resultado => {
        document.getElementById("btnModalCrear").click();
        this.snackBar.open('Rol creado con exito!', 'X', {
          duration: 3000
        });
        this.ngOnInit();
      }, err => {
        console.log("Error: " + JSON.stringify(err));
      });
    }
  }
}
