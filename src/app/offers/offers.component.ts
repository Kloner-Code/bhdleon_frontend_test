import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setTitle('Offers')
  }

}
