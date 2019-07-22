import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

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

  addProduct(product){
    return this.http.post("http://134.209.205.66/api/v1/products/",product,httpOptions);
  }
}
