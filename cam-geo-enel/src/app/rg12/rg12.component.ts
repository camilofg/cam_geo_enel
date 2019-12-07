import { Component, OnInit } from '@angular/core';
import { Rg12Service } from '../services/rg12.service';
import { Rg12 } from '../shared/models/rg12';

@Component({
  selector: 'app-rg12',
  templateUrl: './rg12.component.html',
  styleUrls: ['./rg12.component.scss']
})
export class Rg12Component implements OnInit {
  private listRg12;
  constructor(private Rg12Services : Rg12Service) { }

  ngOnInit() {
    this.loadRg12();
  }

  loadRg12(){
    this.Rg12Services.getRg12s().subscribe((data : Rg12) => {
      console.log(data, " is what you get from server")
      this.listRg12 = data
    }),
    (err) => {
      console.log(err, 'print error in items component') 
    }
  }
}
