import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResponse } from 'src/app/view-models/products-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getUserProducts() {
    const url = `${environment.baseUrl}/user_data`;
    return this.http.get<ProductsResponse>(url).toPromise();
  }
}
