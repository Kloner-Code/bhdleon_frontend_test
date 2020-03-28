import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
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

  private titles = {
    '/products': 'MyProducts',
    '/transactions': 'Transactions',
    '/offers': 'Offers',
    '/settings': 'Settings'
  }

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url){
        this.title = this.titles[event.url];
        console.log(this.title);
      }
    });
  }
}
