import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Rg12Service {

  constructor(private http: HttpClient) { }

  getRg12s(){
    return this.http.get('http://127.0.0.1:8000/rg12/',
    {
    headers: new HttpHeaders
    ({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }).pipe(map(data => { 
    console.log(data, "item response")  
    return data 
  }))
  }

  getRg12(id : number){
    return this.http.get('http://127.0.0.1:8000/rg12/' + id,
    {
    headers: new HttpHeaders
    ({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }).pipe(map(data => { 
    console.log(data, "item response")  
    return data 
  }))
  }
}
