import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.scss']
})
export class CircuitoComponent implements OnInit {

  constructor(private ProjectsService : ProjectService) { }

  ngOnInit() {
  }

}
