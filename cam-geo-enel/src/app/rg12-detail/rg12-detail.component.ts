import { Component, OnInit, Input } from '@angular/core';
import { Rg12Service } from '../services/rg12.service';
import { Rg12 } from '../shared/models/rg12';
import { ProjectService } from '../services/project.service';
import { CircuitService } from '../services/circuit.service';
import { Circuito } from '../shared/models/circuito.model';
import { Proyecto } from '../shared/models/proyecto.model';

@Component({
  selector: 'app-rg12-detail',
  templateUrl: './rg12-detail.component.html',
  styleUrls: ['./rg12-detail.component.scss']
})
export class Rg12DetailComponent implements OnInit {
  @Input() rg12 : Rg12
  private CircuitItems : Circuito[];
  private ProjectItems : Proyecto[];
  constructor(private Rg12Services : Rg12Service, 
    private ProjectServices : ProjectService,
    private CircuitServices : CircuitService) { 
    this.rg12 = new Rg12();
  }

  ngOnInit() {
    this.ProjectServices.getProyectos().subscribe((data : Proyecto[])=>{
      this.ProjectItems = data
      console.log(data, ' data get from server')
    }),
      (err)=>{
        console.log(err, 'error ocurred')
      }

      this.CircuitServices.getCircuitos().subscribe((data : Circuito[])=>
      {
        this.CircuitItems = data
        console.log(data, ' circuits get from server')
      }),
      (err)=>{
        console.log(err, 'error ocurred')
      }
  }

}
