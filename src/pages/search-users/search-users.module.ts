import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUsersPage } from './search-users';

@NgModule({
  declarations: [
    SearchUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUsersPage),
  ],
})
export class SearchUsersPageModule {}
