import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { TransactionsComponent } from './transactions.component';

const routes = [
  {
    path: '',
    component: TransactionsComponent
  }
]

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ]
})
export class TransactionsModule { }
