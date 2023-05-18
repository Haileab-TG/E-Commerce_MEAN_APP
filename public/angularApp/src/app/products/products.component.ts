import { Component } from '@angular/core';

import { ProductsDataService } from '../products-data.service';

export class Review{
	#title:string;
	#rating:number;
	#description:string;

	constructor(title:string, rating:number, description: string){
		this.#title = title;
		this.#rating = rating;
		this.#description = description;
	}

	set title(title:string){
		this.#title = title;
	}
	set rating(rating:number){
		this.#rating = rating;
	}
	set description(description: string){
		this.#description = description;
	}

	get title(){
		return this.#title;
	}
	get rating(){
		return this.#rating;
	}
	get description(){
		return this.#description;
	}


}

export class Product {
	#_id:string;
	#name: string;
	#price: number;
	#img: string;
	#review: Review[];

	constructor(id: string, name: string, price: number, img: string, review:Review[]) {
		this.#_id = id;
		this.#name = name;
		this.#price = price;
		this.#img = img;
		this.#review = review;
	}

	set _id(id: string) {
		this.#_id = id;
	}

	get _id() {
		return this.#_id;
	}

	set name(name: string) {
		this.#name = name;
	}

	get name() {
		return this.#name;
	}

	set price(price: number) {
		this.#price = price;
	}

	get price() {
		return this.#price;
	}

	set img(img: string) {
		this.#img = img;
	}

	get img() {
		return this.#img;
	}

	set review(review: Review[]) {
		this.#review = review;
	}

	get review() {
		return this.#review;
	}
}




@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

	products!: Product[];
	offset:number= 0;
	count: number = 5;

	constructor(private _productsService: ProductsDataService){}

	getAllRequest(){
		this._productsService.getProducts(this.offset, this.count).subscribe({
			next: (products)=> {this.products = products},
			error: (err)=> {console.log("getAll error",err);},
			complete: ()=>{}
		});
	}

	ngOnInit() {
		this.getAllRequest();
	}


	next(){
		this.offset += this.count;
		this.ngOnInit();
	}

	previous(){
		this.offset -= this.count;
		this.ngOnInit();
	}


}
