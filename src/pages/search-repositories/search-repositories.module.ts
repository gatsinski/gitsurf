import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchRepositoriesPage } from './search-repositories';

@NgModule({
  declarations: [
    SearchRepositoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchRepositoriesPage),
  ],
})
export class SearchRepositoriesPageModule {}
