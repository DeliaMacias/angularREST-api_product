import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
 

  constructor( private apiproduct:ProductosService) {

    
    console.log('Constructor del edificio');
      this.apiproduct.findAll()
        .subscribe((data: any) => {
          this.products = data.data;
          console.log(this.products);
        },
        (err)=> {
          console.log(err);
          return null;
        }
        );
   }

  ngOnInit() {
    
  }

}
