import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rg12Component } from './rg12/rg12.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { Rg12DetailComponent } from './rg12-detail/rg12-detail.component';

const routes: Routes = [
  {
    path: 'rg12',
    component: Rg12Component
  },
  {
    path: 'project',
    component: ProyectoComponent
  },
  {
    path: 'rg12_detail',
    component: Rg12DetailComponent
  },
  {
    path: 'rg12_detail/:id',
    component: Rg12DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
