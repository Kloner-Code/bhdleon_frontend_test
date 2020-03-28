import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  title: string = ''
  public appPages = [
    {
      title: 'Settings',
      url: '',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'md-exit'
    }
  ];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.menuTitle.subscribe(currentTitle => {
      this.title = currentTitle;
    })
  }
}
