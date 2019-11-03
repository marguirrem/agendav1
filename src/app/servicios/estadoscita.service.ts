import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoscitaService {
  BASE_URL='http://localhost:8080/api/v1/estadoscita/';
  estadosCita : any = [];
  constructor(private httpClient : HttpClient) { }

  obtenerEstadosCita() : Observable<any>{
    return this.httpClient.get(this.BASE_URL);
  }

  obtenerEstadoCita(id : string){
    let url = this.BASE_URL +id;
    return this.httpClient.get(url);
  }

  editarEstado(estadoCita :any){
    return this.httpClient.put(this.BASE_URL+estadoCita.estadoCitaId,estadoCita);
  }

  crearEstado(estadoCita : any){
    return this.httpClient.post(this.BASE_URL,estadoCita);
  }
}
