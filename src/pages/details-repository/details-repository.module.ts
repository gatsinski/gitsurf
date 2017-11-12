import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsRepositoryPage } from './details-repository';

@NgModule({
  declarations: [
    DetailsRepositoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsRepositoryPage),
  ],
})
export class DetailsRepositoryPageModule {}
