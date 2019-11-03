import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : any = []

  constructor(
    private clienteService: ClientesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe(resultado => {
      this.clientes = resultado;
    }, err => {
      console.log("Error: " + JSON.stringify(err));
    });
  }

  crearCliente() {
    let nombre = (<HTMLInputElement>document.getElementById("clienteNombreC")).value;
    let apellido = (<HTMLInputElement>document.getElementById("clienteApellidoC")).value;
    let correo = (<HTMLInputElement>document.getElementById("clienteCorreoC")).value;
    let direccion = (<HTMLInputElement>document.getElementById("clienteDireccionC")).value;
    let origen = (<HTMLInputElement>document.getElementById("clienteOrigenC")).value;
    //let nombre = document.getElementById("rolNombreC").value;
    //let estado = document.getElementById("rolEstadoC").value;
    let estado = (<HTMLInputElement>document.getElementById("clienteEstadoC")).value;

    if (nombre == "") {

    } else {
      let cliente = {
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo,
        "direccion": direccion,
        "origen": origen,
        "estado": estado
      }
      this.clienteService.crearCliente(cliente).subscribe(resultado => {
        document.getElementById("btnModalCrearCliente").click();
        this.snackBar.open('Cliente creado con exito!', 'X', {
          duration: 3000
        });
        this.ngOnInit();
      }, err => {
        console.log("Error: " + JSON.stringify(err));
      });
    }
  }

}
