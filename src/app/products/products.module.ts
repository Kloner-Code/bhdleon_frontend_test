import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ProductsComponent } from './products.component';

const routes = [
  {
    path: '',
    component: ProductsComponent
  }
]

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
