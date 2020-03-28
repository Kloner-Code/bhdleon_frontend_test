import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

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
