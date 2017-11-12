import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsIssuePage } from './details-issue';

@NgModule({
  declarations: [
    DetailsIssuePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsIssuePage),
  ],
})
export class DetailsIssuePageModule {}
