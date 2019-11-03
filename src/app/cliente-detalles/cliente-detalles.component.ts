import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

  cliente: any;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClientesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.obtenerCliente(params.get('clienteId'));
    });
  }
  obtenerCliente(id: string) {
    return this.clienteService.obtenerCliente(id).subscribe(resultado => {
      this.cliente = resultado;
    });
  }

  toggleModalEditar() {
    let button = document.getElementById("toggleModalEditarCliente");
    button.click();
    (<HTMLInputElement>document.getElementById("clienteNombreE")).value = this.cliente.nombre;
    (<HTMLInputElement>document.getElementById("clienteApellidoE")).value = this.cliente.apellido;
    (<HTMLInputElement>document.getElementById("clienteCorreoE")).value = this.cliente.correo;
    (<HTMLInputElement>document.getElementById("clienteDireccionE")).value = this.cliente.direccion;
    (<HTMLInputElement>document.getElementById("clienteEstadoE")).value = this.cliente.estado;
    (<HTMLInputElement>document.getElementById("clienteOrigenE")).value = this.cliente.origen;
  }

  editarCliente(): void {
    //let nombre = document.getElementById("rolNombre");
    let nombre = (<HTMLInputElement>document.getElementById("clienteNombreE")).value;
    let apellido = (<HTMLInputElement>document.getElementById("clienteApellidoE")).value;
    let correo = (<HTMLInputElement>document.getElementById("clienteCorreoE")).value;
    let direccion = (<HTMLInputElement>document.getElementById("clienteDireccionE")).value;
    let estado = (<HTMLInputElement>document.getElementById("clienteEstadoE")).value;
    let origen = (<HTMLInputElement>document.getElementById("clienteOrigenE")).value;

    if (nombre == "" || apellido == "" || direccion == "" ) {
      this.snackBar.open('Campos obligatorios! [nombre,apellido,direccion]', 'X', {
        duration: 3000
      });
    } else {
      this.cliente.nombre = nombre;
      this.cliente.estado = estado;
      this.cliente.apellido = apellido;
      this.cliente.correo = correo;
      this.cliente.direccion = direccion;
      this.cliente.origen = origen;
      console.log("cliente "+ JSON.stringify(this.cliente) )

      this.clienteService.editarCliente(this.cliente).subscribe((resultado) => {
        this.toggleModalEditar();
        this.snackBar.open('cliente actualizado con exito!', 'X', {
          duration: 3000
        });
      }, (error) => {
        console.log("Error: " + JSON.stringify(error));
      });
    }
  }

}
