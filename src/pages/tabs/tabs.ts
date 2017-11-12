import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { LoginPage } from '../login/login';

import { GitHubService } from '../../services/github';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  searchPage = SearchPage;
  loginPage = LoginPage;

  constructor(private github: GitHubService) {
  }

  getLoginTabTitle() {
    if (!this.github.isAuthenticated) {
      return "Login";
    } else {
      return "Profile";
    }
  }
}
