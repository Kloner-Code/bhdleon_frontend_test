import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ProductsResponse } from '../view-models/products-response';
import { CardsResponse } from '../view-models/cards-response';
import { ProductsService } from '../services/products/products.service';
import { CreditCardsService } from '../services/credit-cards/credit-cards.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public accountList: ProductsResponse[] = [
    {
      alias: 'Cuenta de ahorros 1',
      number: '0001',
      availableAmount: '10,000.00',
      productType: 'AC'
    }
  ]

  public cardList: CardsResponse[] = [
    {
      alias: 'Tarjeta de crédito 1',
      number: '0001',
      availableAmountRD: 50000,
      availableAmountUS: 50000,
      isInternational: false,
      productType: 'CC'
    }
  ]

  constructor(private productService: ProductsService, private cardService: CreditCardsService) { }

  ngOnInit() {
    this.fillAccountList();
    this.fillCreditCardList();
  }

  private async fillAccountList() {
    this.accountList = await this.productService.getUserProducts();
  }

  private async fillCreditCardList() {
    this.cardList = await this.cardService.getUserProducts();
  }
}
