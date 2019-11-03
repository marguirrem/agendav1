import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  BASE_URL='http://localhost:8080/api/v1/clientes/';

  constructor(
    private httpClient : HttpClient
  ) { }

  obtenerClientes() : Observable<any>{
    return this.httpClient.get(this.BASE_URL);
  }

  obtenerCliente(id : string){
    let url = this.BASE_URL +id;
    return this.httpClient.get(url);
  }

  editarCliente(cliente :any){
    return this.httpClient.put(this.BASE_URL+cliente.clienteId,cliente);
  }

  crearCliente(cliente : any){
    return this.httpClient.post(this.BASE_URL,cliente);
  }
}
