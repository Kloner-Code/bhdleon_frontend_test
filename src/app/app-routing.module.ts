import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: TabsComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'products',
            loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
          },
          {
            path: 'transactions',
            loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
          },
          {
            path: 'offers',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
          },
          {
            path: 'settings',
            loadChildren: () => import('./user-settings/user-settings.module').then(m => m.UserSettingsModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
          }
          // {
          //   path: 'branch',
          //   loadChildren: () => import('./branches/branches.module').then(m => m.BranchesModule)
          // }
        ]
      }
    ]
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
