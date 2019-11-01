import { EstalogueadoService } from './estalogueado.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/api/v1/login';
  constructor(private httpClient : HttpClient, private estalogueado: EstalogueadoService) { }

  login(correo: string, pass : string) : Observable <any>{

    let login = {"correo": correo,"pass":pass }
    console.log("servicio: correo = " +correo +" pass "+pass);
    this.estalogueado.isUserLoggedIn.next(true);
    return this.httpClient.post(this.url,login);
  }
}
