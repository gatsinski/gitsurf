import { Component } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';

import { SearchUsersPage } from '../search-users/search-users';
import { SearchRepositoriesPage } from '../search-repositories/search-repositories';
import { SearchIssuesPage } from '../search-issues/search-issues';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  constructor(private nav: NavController) {
  }

  goToSearchIssuesPage() {
    this.nav.push(SearchIssuesPage);
  }

  goToSearchRepositoriesPage() {
    this.nav.push(SearchRepositoriesPage);
  }

  goToSearchUsersPage() {
    this.nav.push(SearchUsersPage);
  }
}
