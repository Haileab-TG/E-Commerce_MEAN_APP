import { Component } from '@angular/core';

import { ProductsDataService } from '../products-data.service';

export class Product {
	#_id:string;
	#title: string;
	#price: number;

	constructor(id: string, title: string, price: number) {
		this.#_id = id;
		this.#title = title;
		this.#price = price;
	}

	set _id(id: string) {
		this.#_id = id;
	}

	get _id() {
		return this.#_id;
	}

	set title(title: string) {
		this.#title = title;
	}

	get title() {
		return this.#title;
	}

	set price(price: number) {
		this.#price = price;
	}

	get price() {
		return this.#price;
	}
}

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

	products!: Product[] ;

	constructor(private _productsService: ProductsDataService){}

	deleteOneRequest(id:string){
		this._productsService.deleteProduct(id).subscribe({
			next: (res) =>  {console.log("delete success", res);},
			error: (err) => {console.log("delete err", err);},
			complete: () => {this.getAllRequest();}
		});
	}

	getAllRequest(){
		this._productsService.getProducts().subscribe({
			next: (products)=> {this.products = products},
			error: (err)=> {console.log("getAll error",err);},
			complete: ()=>{}
		});
	}

	ngOnInit() {
		this.getAllRequest();
	}





}
