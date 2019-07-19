import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
//Todas las peticiones estarán aquí.

  constructor(private http: HttpClient) { }

  public findAll(){
    //104.248.94.77
    return this.http.get("http://134.209.205.66/api/v1/products/");
  }

  findByName(name) {
    return this.http.get("http://134.209.205.66/api/v1/products/"+name);
  }
}
