import { ActivatedRoute } from '@angular/router';
import { RolesService } from './../servicios/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rol-detalles',
  templateUrl: './rol-detalles.component.html',
  styleUrls: ['./rol-detalles.component.css']
})
export class RolDetallesComponent implements OnInit {

  rol : any;

  constructor(private route : ActivatedRoute,private rolesService : RolesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.obtenerRol(params.get('rolId'));
    });
  }

  obtenerRol(id : string){
    return this.rolesService.obtenerRol(id).subscribe(resultado =>{
      this.rol = resultado;
    });
  }

}
