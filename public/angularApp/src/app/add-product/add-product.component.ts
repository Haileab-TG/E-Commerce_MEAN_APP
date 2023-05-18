import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsDataService } from '../products-data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
	_productFormGroup: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		price: new FormControl('', Validators.required),
		img: new FormControl('')
	});

	constructor(private _productsService: ProductsDataService, private _router: Router){}

	addOne() {
		console.log("hello")
			this._productsService.addProduct(this._productFormGroup.value).subscribe({
				next: (res)=>{console.log(res)},
				error: (err)=>{console.log(err)},
				complete:()=> this._router.navigate(['products'])
			});
	}
}
