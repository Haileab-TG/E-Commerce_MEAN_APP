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

	getProducts(offset:number, count:number) : Observable<Product[]> {
		const url = this._baseURL + "?count="+count + "&offset="+ offset;
		return this._http.get<Product[]>(url);
	}

	getProduct(id: string) : Observable<Product>{
		return this._http.get<Product>(this._baseURL + "/" + id);
	}

	addProduct(product: Product): Observable<Product>{
		return	this._http.post<Product>(this._baseURL, product);
	}

	deleteProduct(id: string) : Observable<Product>{
		return this._http.delete<Product>(this._baseURL + "/" + id);
	}

	fullUpdateProduct(id: string, product:Product): Observable<Product>{
		return this._http.put<Product>(this._baseURL + "/" + id, product);
	}


}
