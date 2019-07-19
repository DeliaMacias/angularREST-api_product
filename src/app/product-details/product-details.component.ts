import { Component, OnInit } from '@angular/core';
import{ ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product;
  

  constructor(private apiProducts:ProductosService, 
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      (params) =>{
        this.apiProducts.findByName(params.get('name')).
        subscribe(
          (product_result:any) => {
            this.product = product_result;
            console.log(product_result);
          },
          (err) => {
            console.log(err);
          }
        )
      }
    )
   }

  ngOnInit() {  
      
  }

}
