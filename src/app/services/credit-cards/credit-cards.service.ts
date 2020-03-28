import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsResponse } from 'src/app/view-models/cards-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor(private http: HttpClient) { }

  public getUserProducts(): Promise<CardsResponse[]> {
    const url = `${environment.baseUrl}/products/credit_cards`;
    return this.http.get<CardsResponse[]>(url).toPromise();
  }
}
