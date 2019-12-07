import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { CircuitoComponent } from './circuito/circuito.component';
import { Rg12Component } from './rg12/rg12.component';
import { HttpClientModule } from '@angular/common/http';
import { Rg12DetailComponent } from './rg12-detail/rg12-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    CircuitoComponent,
    Rg12Component,
    Rg12DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
