import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsDataService } from '../products-data.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
	_productFormGroup: FormGroup = new FormGroup({
		title: new FormControl('', Validators.required),
		price: new FormControl('', Validators.required),
	});
	_formData : FormData = new FormData();
	_missingRequired! : string;

	constructor(private _productsService: ProductsDataService){}

	onSubmitProduct() {
		if(this._productFormGroup.valid){
			this._formData.append("title", this._productFormGroup.value.title);
			this._formData.append("price", this._productFormGroup.value.price);
			console.log(this._productFormGroup.value);
			this._missingRequired = '';
			console.log(this._formData);
			this._productsService.addProduct(this._formData).subscribe({
				next: (res)=>{console.log(res)},
				error: (err)=>{console.log(err)},
				complete:()=>{console.log("Product post completed")}
			});
		}else{
			this._missingRequired = "Please fill title and price!"
		}
		
	}

	onFileSelect(event: Event) {

		const img : File | null = (event.target as HTMLInputElement).files!.item(0);
		if(img){
			this._formData.append("image", img, img.name);
		}
		console.log("file saved to be uploaded", img);
	}



}
