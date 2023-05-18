import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './products/products.component';

@Injectable({
	providedIn: 'root'
})
export class ProductsDataService {
	private _baseURL = "http://localhost:3000/api/products";

	constructor(private _http: HttpClient) { }

	getProducts() : Observable<Product[]> {
		return this._http.get<Product[]>(this._baseURL);
	}

	getProduct(id: string) : Observable<Product>{
		return this._http.get<Product>(this._baseURL + "/" + id);
	}

	addProduct(product: FormData): Observable<object>{
		return	this._http.post(this._baseURL, product);
	}

	deleteProduct(id: string) : Observable<object>{
		return this._http.delete(this._baseURL + "/" + id);
	}


}
