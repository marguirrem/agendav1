import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  BASE_URL = 'http://localhost:8080/api/v1/roles/';

  constructor(private httpClient : HttpClient) { }

  obtenerRoles() :Observable<any>{
      return this.httpClient.get(this.BASE_URL);
  }

  obtenerRol(id : string){
    let url = this.BASE_URL+id;
    return this.httpClient.get(url);
  }

  actualizarRol(rol :any){
    return this.httpClient.put(this.BASE_URL+rol.rolId,rol);
  }

  crearRol(rol : any){
    return this.httpClient.post(this.BASE_URL,rol);
  }
}
