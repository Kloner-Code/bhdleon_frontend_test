import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setTitle('Transactions')
  }

}
