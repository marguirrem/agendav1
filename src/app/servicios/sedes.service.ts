import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SedesService {

  BASE_URL ='http://localhost:8080/api/v1/sedes/';
  
  constructor(private httpClient : HttpClient) { }

  obtenerSedes(): Observable<any>{
    console.log("httpclient");
    return this.httpClient.get(this.BASE_URL);
  }

  obtenerUnaSede(id :string){
    let url = this.BASE_URL+'/'+id;
    return this.httpClient.get(url);
  }

  editarSede(sede :any){
    return this.httpClient.put(this.BASE_URL+sede.sedeId,sede);
  }

  crearSede(sede : any){
    return this.httpClient.post(this.BASE_URL,sede);
  }
}
