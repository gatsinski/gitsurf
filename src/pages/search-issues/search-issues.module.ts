import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchIssuesPage } from './search-issues';

@NgModule({
  declarations: [
    SearchIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchIssuesPage),
  ],
})
export class SearchIssuesPageModule {}
