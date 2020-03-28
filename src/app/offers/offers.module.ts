import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { OffersComponent } from './offers.component';

const routes = [
  {
    path: '',
    component: OffersComponent
  }
]

@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ]
})
export class OffersModule { }
