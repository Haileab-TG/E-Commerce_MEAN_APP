import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsDataService } from '../products-data.service';
import { Product, Review } from '../products/products.component';




@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  _product : Product;

  constructor(private _router: Router, private _route: ActivatedRoute, private _productService: ProductsDataService){
    this._product = new Product("", "", 0, "", [new Review("", 0, "")]);
  }

  delete(){
    this._productService.deleteProduct(this._product._id).subscribe({
      error: (err)=>console.log(err),
      complete: ()=> this._router.navigate(['products'])
    });
  }

  goToEdit(){
    this._router.navigate(['updateProduct/'+ this._product._id])
  }

  ngOnInit(): void {
    const productId = this._route.snapshot.params["productId"];;
    this._productService.getProduct(productId).subscribe(product => this._product = product);
  }
}
