import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { BranchesComponent } from './branches/branches.component';
import { ContactComponent } from './contact.component';

const routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'branches',
    component: BranchesComponent
  }
]

@NgModule({
  declarations: [ContactComponent, BranchesComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
