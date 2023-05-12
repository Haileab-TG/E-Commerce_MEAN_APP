import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsDataService } from '../products-data.service';
import { Product } from '../products/products.component';




@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  _product : Product;

  constructor(private _router: Router, private _route: ActivatedRoute, private _productService: ProductsDataService){
    this._product = new Product("","",0);
  }

  goToAddProducts(){
    this._router.navigate(["addProduct"])
  }

  ngOnInit(): void {
    const productId = this._route.snapshot.params["productId"];;
    this._productService.getProduct(productId).subscribe(product => this._product = product);
  }
}
