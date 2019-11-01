import { RolesService } from './../servicios/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles : any = [];
  constructor(private rolesService : RolesService) { }

  ngOnInit() {
    this.obtenerRoles();
  }

  obtenerRoles(){
    this.rolesService.obtenerRoles().subscribe( resultado =>{
      this.roles = resultado;
    },err =>{
      console.log("Error " + err);
    });
  }

  modalEditar(estado : boolean){
    if (estado == true){
      $("#editarRol").modal("show");
    }else{
      $("#editarRol").modal("hide");
    }
    
  }
}
