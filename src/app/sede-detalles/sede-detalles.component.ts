import { SedesService } from './../servicios/sedes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SedesComponent } from '../sedes/sedes.component';


@Component({
  selector: 'app-sede-detalles',
  templateUrl: './sede-detalles.component.html',
  styleUrls: ['./sede-detalles.component.css']
})
export class SedeDetallesComponent implements OnInit {

  sede : any;
  sedeId : any;
  constructor(private route: ActivatedRoute,private sedesService : SedesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sedeId  = params.get('sedeId');
      this.obtenerSede(this.sedeId);
    });
  }

  obtenerSede(id : string){
    this.sedesService.obtenerUnaSede(id).subscribe(resultado =>{
      this.sede = resultado;
    });
  }

}
