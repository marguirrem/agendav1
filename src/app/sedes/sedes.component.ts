import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  sedes = [
    {"nombre": "Guatemala", "estado":1},
    {"nombre": "Xela", "estado":1},
    {"nombre": "Zacapa", "estado":0}
  ]
  constructor() { }

  ngOnInit() {
  }

}
