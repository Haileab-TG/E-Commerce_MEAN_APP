import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  _product!: Product;
  _productFormGroup: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		price: new FormControl('', Validators.required),
		img: new FormControl('')
	});

	constructor(private _productsService: ProductsDataService, private _router: Router, private _activatedRoute: ActivatedRoute){}

	fullUpdateOne() {
			this._productsService.fullUpdateProduct(this._product._id, this._productFormGroup.value).subscribe({
				error: (err)=>{console.log(err)},
        complete: ()=> this._router.navigate(['product/' + this._product._id]),
			});
	}

  setFormValues(){
    this._productFormGroup.patchValue({
      name: this._product.name,
      price: this._product.price,
      img: this._product.img
    });
  }

  ngOnInit(){
    const productId:string = this._activatedRoute.snapshot.params['productId'];
    this._productsService.getProduct(productId).subscribe({
      next:(product)=> this._product = product,
      error: (err)=> console.log(err),
      complete: ()=> this.setFormValues()
    });
  }
}
