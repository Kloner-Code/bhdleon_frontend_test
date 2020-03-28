import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setTitle('Settings')
  }
}
