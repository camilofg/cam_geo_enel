import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  constructor(private ProjectService : ProjectService) { }

  ngOnInit() {
    this.ProjectService.getProyectos().subscribe(data =>{
      console.log(data, " this is what you get from server")
    })
  }

}
