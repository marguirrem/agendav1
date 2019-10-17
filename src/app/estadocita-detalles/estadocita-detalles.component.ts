import { ActivatedRoute } from '@angular/router';
import { EstadoscitaService } from './../servicios/estadoscita.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadocita-detalles',
  templateUrl: './estadocita-detalles.component.html',
  styleUrls: ['./estadocita-detalles.component.css']
})
export class EstadocitaDetallesComponent implements OnInit {

  estadoCita : any;
  constructor(private route : ActivatedRoute, private estadosCitaService :EstadoscitaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.obtenerEstadoCita(params.get('estadoCitaId'));
    });
    
  }

  obtenerEstadoCita(id : string){
    return this.estadosCitaService.obtenerEstadoCita(id).subscribe(resultado => {
      this.estadoCita = resultado;
    },err =>{
      console.log("Error: " + err);
    });
  }
}
