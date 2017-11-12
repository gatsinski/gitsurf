import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsUserPage } from './details-user';

@NgModule({
  declarations: [
    DetailsUserPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsUserPage),
  ],
})
export class DetailsUserPageModule {}
