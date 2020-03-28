import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { UserResponse } from 'src/app/view-models/user-response';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  public name = 'Danyer Dominguez'
  public image = 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'
  public appPages = [
    {
      title: 'MyProducts',
      url: './products',
      icon: '../../../assets/images/icon_my_products_green.svg'
    },
    {
      title: 'Transactions',
      url: './transactions',
      icon: '../../../assets/images/icon_transactions_green.svg',
    },
    {
      title: 'Offers',
      url: './ofeers',
      icon: '../../../assets/images/icon_offers_green.svg'
    },
    {
      title: 'Settings',
      url: './settings',
      icon: '../../../assets/images/icon_config_green.svg'
    }
  ];

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    // this.usersService.getUserData().then((userData: UserResponse) => {
    //   this.name = `${userData.name} ${userData.lastName}`;
    //   this.image = userData.photo
    // })
  }

  logout() {
    this.router.navigate(['./login']);
  }
}
